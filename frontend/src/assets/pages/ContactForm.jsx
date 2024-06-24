import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost/portfolio_react/backend/submit.php', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setResponseMessage('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setResponseMessage('Error submitting form, please try again.');
            console.error('Error submitting form:', error);
        }
    };

    return (
      <section id='contact form' className='bg-black'>
        
         <h4 className='text-4xl font-semibold uppercase underline text-blue-500 text-center '>Contact Me</h4>
        <div className="max-w-md mx-auto p-6 bg-black border border-gray-300  rounded-lg shadow-lg mt-10">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Message:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </div>
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none sm:text-sm"
                >
                    Submit
                </button>
                {responseMessage && <div className="mt-4 text-sm text-green-600">{responseMessage}</div>}
            </form>
        </div>
        <hr className='mt-16' />
        </section>
    );
};

export default ContactForm;
