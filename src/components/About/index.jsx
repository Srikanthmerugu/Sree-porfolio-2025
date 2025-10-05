import React, { useEffect, useRef } from 'react'
import "./About.css"
import { profile2 } from '../../images'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const About = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".about__container",{
      scale:0.7
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
      }
    }
  )
  },[])
  return (
    <section id='about' ref={container}>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="image"  />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">I am <span className="color__primary">Srikanth Merugu</span></h1>
          <p className="text__muted description">
  Frontend Developer with a proven ability to craft responsive, user-friendly, and high-performance web applications. 
  Skilled in modern web technologies, including React.js and Next.js, with a focus on delivering seamless user experiences. 
  Passionate about clean code, collaboration, and staying updated with the latest trends in web development.
</p>

        </div>
      </div>
    </section>
  )
}

export default About