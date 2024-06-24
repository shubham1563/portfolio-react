import { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
// import Navbar from './assets/pages/Navbar';
import Nav from '../src/assets/pages/Nav'
import Hero from './assets/pages/Hero'
import WorkBar from './assets/pages/Workbar'
import Aboutme from './assets/pages/Aboutme'
import SkillsSection from './assets/pages/SkillsSection'
import EducationSection from './assets/pages/EducationSection'
import ContactForm from './assets/pages/ContactForm'
import Cont_heading from './assets/pages/Cont_heading';
import Footer from './assets/pages/Footer';


function App() {
  

  return (
    <>
      {/* <Navbar/> */}
      <Nav/>
      <Hero />
      <Aboutme />
      <EducationSection />
      <SkillsSection />
      <WorkBar />
      <Cont_heading/>
      <ContactForm />
      <Footer />

    </>
  )
}

export default App
