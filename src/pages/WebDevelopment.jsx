import React from 'react'
import home from '../img/home.png'
import panah from '../img/panah.png'
import '../css/web-development.css'
import porto1 from '../img/porto1.png'
import porto2 from '../img/porto2.png'
import porto3 from '../img/porto3.png'
import porto4 from '../img/porto4.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const WebDevelopment = () => {
  return (
    <div>
      <div className='header-web'>
        <Link to='/'><img src={home} alt="" /></Link>   
        <div className='page-graph'>
        <Link to='/GraphicDesign' style={{ textDecoration: 'none' }}><h6>Graphic Desgin <img src={panah} alt="" /></h6></Link>
        </div>
      </div>
      <div className='judul-web'>
        <h1>Web Development</h1>
        <h2>Portfolio</h2>
      </div>
      <div className='box-porto'>
        <a href="https://bikininkaosid.my.id/" target='_blank' rel="noopener noreferrer">
          <div className='porto-web'>
            <img src={porto1} alt="" />
            <h4>www.bikininkaosid.my.id</h4>
          </div>
        </a>
        <a href="https://www.karikaturtng.com/" target='_blank' rel="noopener noreferrer">
          <div className='porto-web'>
            <img src={porto2} alt="" />
            <h4>www.karikaturtng.com</h4>
          </div>
        </a>
        <a href="http://rumahpakanindonesia.com/" target='_blank' rel="noopener noreferrer">
          <div className='porto-web'>
            <img src={porto3} alt="" />
            <h4>www.rumahpakanindonesia.com</h4>
          </div>
        </a>
        <a href="http://www.accphotobooth.biz.id/" target='_blank' rel="noopener noreferrer">
          <div className='porto-web'>
            <img src={porto4} alt="" />
            <h4>www.accphotobooth.biz.id</h4>
          </div>
        </a>
        
      </div>
      <Footer/>
    </div>
  )
}

export default WebDevelopment