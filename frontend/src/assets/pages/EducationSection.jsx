import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const educationData = [
    {
      institution: "Punyashlok Ahilyadevi Holkar Solapur University",
      degree: "Bachelor of Science in Computer Science",
      startDate: "September 2021",
      endDate: "June 2023",
      description: "Focused on software development, data structures, and algorithms. Participated in various hackathons and coding competitions.",
    },
    {
      institution: "Vivek Vardhini Vidhyalaya & Junior College",
      degree: "HSC [SCIENCE]",
      startDate: "September 2011",
      endDate: "June 2015",
      description: "Excelled in mathematics and computer science. Member of the school's programming club.",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl uppercase font-semibold text-blue-500 text-center mb-10">Education</h2>
        <div className="flex flex-wrap -mx-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 h-full">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{edu.institution}</h3>
                <p className="text-lg text-gray-700 mb-1">{edu.degree}</p>
                <p className="text-gray-500 mb-4">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
