import React from 'react'
import HomeMidSection from './HomeMidSection'
import Aboutsection from './Aboutsection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'

const Home = () => {
  return (
    <>
      <section id="home"  ><HomeMidSection /></section>
      <section id="about"><Aboutsection /></section>
      <section id="projects"><ProjectSection /></section>
      <section id="contact"><ContactSection /></section>
      <FooterSection />
    </>
  )
}

export default Home