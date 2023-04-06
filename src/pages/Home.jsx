import React from 'react'
import '../css/home.css'
import panah from '../img/panah.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='nama-moe'>
         <h1>Muhamad Najamudin</h1>
         <h2>I’m Junior programmer, Front end developer and Graphic Designer.</h2>
      </div>
      <h3>Portfolio</h3>
      <div className='box-web'>
         <Link to="WebDevelopment" style={{ textDecoration: 'none' }}><h4>Web Development<img src={panah} alt="" /></h4></Link>
      </div>
      <div className='box-design'>
        <Link to='GraphicDesign' style={{ textDecoration: 'none' }} ><h4>Graphic Design<img src={panah} alt="" /></h4></Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Home