import React from 'react'
import home from '../img/home.png'
import { Link } from 'react-router-dom'
import '../css/aboutme.css'
import potoprofile from '../img/poto-profile.png'
import skill from '../img/skill.png'
import ig from '../img/instagram.png'
import mail from '../img/mail.png'
import linkedin from '../img/linked-in.png'
import github from '../img/github.png'

const AboutMe = () => {
  return (
    <div>
      <div className='header-web'>
        <Link to='/'><img src={home} alt="" /></Link>
      </div>
      <div className='judul-about-me'>
        <h1>About Me</h1>
        <h2>Muhamad Najamudin</h2>
      </div>
      <div className='profile'>
        <img src={potoprofile} alt="" />
        <h1>Moe</h1>
        <h2>Saya pekerja keras, mudah beradaptasi,
          bisa bekerja sama tim dengan baik,
          suka belajar hal baru dan selalu ingin bertumbuh.</h2>
      </div>
      <hr className='new1' />
      <div className='skill'>
        <h1>Skill</h1>
        <img src={skill} alt="" />
      </div>
      <div className='work-experience'>
        <div className='grid-item item1'>Work Experience</div>
        <div className='grid-item item2'>Jul 2022 - Oct 2022</div>
        <div className='grid-item item3'>PT. Mitra Integrasi Usaha</div>
        <div className='grid-item item4'>Design Graphic</div>
        <div className='grid-item item2'>Mar 2022 - Nov 2021</div>
        <div className='grid-item item3'>CV. Aztama</div>
        <div className='grid-item item4'>Admin Online Shope</div>
        <div className='grid-item item2'>Feb 2017 - Feb 2021</div>
        <div className='grid-item item3'>CV.Km Sejahtera</div>
        <div className='grid-item item4'>Admin Online Shope</div>
        <div className='grid-item item2'>Sep 2014 - Jul 2015</div>
        <div className='grid-item item3'>PT. Midi Utama Indonesia Tbk</div>
        <div className='grid-item item4'>Pramuniaga / Kasir</div>
      </div>
      <div className='contact-me'>
        <h1>Contact Me</h1>
      </div>
      <div className='sosmed'>
        <a href="https://www.instagram.com/mnajamudin28/" target='_blank' rel="noopener noreferrer"><img src={ig} alt="" /></a>
        <a href="mailto:email@example.com"><img src={mail} alt="" /></a>
        <a href="https://www.linkedin.com/in/muhamad-najamudin-4463351b4/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
        <a href="https://github.com/mnajamudin28" target='_blank' rel="noopener noreferrer"><img src={github} alt="" /></a>
      </div>
    </div>
  )
}

export default AboutMe