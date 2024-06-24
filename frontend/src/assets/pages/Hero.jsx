import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import { faLinkedin, faInstagram, faSnapchat, faGithub } from '@fortawesome/free-brands-svg-icons';
const Hero = () => {
  return (
    <section id="hero" className="bg-black p-10 ">
      
      <div className="md:grid md:mx-20  grid-cols-2">
        <div className="flex mt-4 md:mt-0 justify-center md:items-start items-center flex-col">
          <h1 className="text-xl text-white md:text-3xl">Hello Mate</h1>
          <h2 className="text-xl text-white md:text-5xl">I'm Shubham Mali</h2>
          <h2 className="text-xl  text-white md:text-5xl">
            a <span className="text-blue-500 ">Web Developer</span>
          </h2>
          <p className="mt-4 text-white  p-2">
            As a web developer, my objective is to make a positive impact on client, co-workers, and Internet using my skills and experience to design attractive websites.
          </p>
          <div className="mt-5">
            <a
              href="https://api.whatsapp.com/send?phone=918805601826&text=Hello%20%2C%20I%20want%20to%20hire%20you%20for%20my%20Website%20%2C%20can%20you%20schedule%20some%20dates%20%3F"
              className="p-3 bg-blue-500 rounded text-white"
            >
              Chat With Me
            </a>
            <a
              href="Shubham-Resume.pdf"
              download="download"
              className="p-3 border border-dark-400 bg-green-400 rounded-lg text-dark ml-3"
            >
              Download CV
            </a>
            <div className="links flex justify-center items-center mt-5 space-x-5 text-2xl">
            <a href="https://www.linkedin.com/in/shubham-mali-6874242a2" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/its_shubham.23_?igsh=MTNjNm9qcmNxNmJ1Nw==" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.snapchat.com/add/shubhya.0723?share_id=P_cqSxzReM4&locale=en-US" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
              <a href="https://github.com/shubham1563" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <img src="../public/img/shubham.pn" alt="Profile" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
