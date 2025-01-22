import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el= container.current
    gsap.fromTo('.service__head',{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
  )
  },[])
  return (
    <>
  
    <section id="services" ref={container}>
  <div className="section__wrapper services__wrapper">
    <div className="section__header center">
      <h2 className="primary__title">Services</h2>
      <p className="text__muted description">
        I specialize in crafting modern, responsive, and user-friendly web applications. My expertise ensures
        your ideas are transformed into functional and visually appealing digital solutions.
      </p>
    </div>

    <div className="services__group">
      <article className="service">
        <div className="service__top">
          <div className="icon__container">
            <FaPaintBrush className="icon" />
          </div>
          <h3 className="title">UI/UX Design</h3>
        </div>
        <div className="service__middle">
          <p className="text__muted description">
            I design intuitive and engaging user interfaces that enhance user experience. Leveraging tools like 
            Figma, wireframes, Tailwind CSS, Material UI, and Sass, I create visually striking and responsive layouts 
            suitable for all screen sizes.
          </p>
        </div>
        <div className="service__bottom">
          <button className="btn btn__primary">Read more</button>
        </div>
      </article>
      {/* End UI/UX Design */}

      <article className="service" style={{ "--color-primary": "var(--color-success)" }}>
        <div className="service__top">
          <div className="icon__container">
            <BsCodeSquare className="icon" />
          </div>
          <h3 className="title">Web Development</h3>
        </div>
        <div className="service__middle">
          <p className="text__muted description">
            From static websites to dynamic applications, I build high-performance, scalable web solutions using 
            React.js, Next.js, and JavaScript. My services include seamless API integration, responsive design, 
            and optimized performance to meet business goals.
          </p>
        </div>
        <div className="service__bottom">
          <button className="btn btn__primary">Read more</button>
        </div>
      </article>
      {/* End Web Development */}

      <article className="service" style={{ "--color-primary": "blueviolet" }}>
        <div className="service__top">
          <div className="icon__container">
            <TfiWrite className="icon" />
          </div>
          <h3 className="title">Content Creation</h3>
        </div>
        <div className="service__middle">
          <p className="text__muted description">
            I develop content-driven platforms such as e-commerce educational websites, blog applications, and career 
            pages. My focus is on delivering seamless admin functionalities and user-friendly designs to create engaging 
            and efficient user experiences.
          </p>
        </div>
        <div className="service__bottom">
          <button className="btn btn__primary">Read more</button>
        </div>
      </article>
      {/* End Content Creation */}
    </div>
  </div>
</section>

    </>
  )
}

export default Services
