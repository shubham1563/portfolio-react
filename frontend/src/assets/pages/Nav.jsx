import React, { useState } from 'react';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className=" bg-black p-5">
      <div className="container mx-auto flex justify-between  items-center">
        <div className="text-2xl font-bold text-white" ><img src="../public/img/logo.jpg" className='h-14 w-auto' alt="" /></div>
        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-6 ${isNavOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="md:flex  md:space-x-6 mr-16 uppercase font-semibold">
            <li className="my-2 md:my-0 ">
              <a href="#" className="text-white ">Home</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white ">Work Experience</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white ">Skills</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white ">Services</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white ">Education</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
