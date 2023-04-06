import React from 'react'
import home from '../img/home.png'
import panah from '../img/panah.png'
import { Link } from 'react-router-dom'
import '../css/web-development.css'
import '../css/graphic-design.css'
import Footer from '../components/Footer'

const GraphicDesign = () => {
  return (
    <div>
        <div className='header-web'>
           <Link to='/'><img src={home} alt="" /></Link>
           <div className='page-graph'>
            <Link to='/WebDevelopment' style={{ textDecoration: 'none' }}><h6>Web Development <img src={panah} alt="" /></h6></Link>
           </div>
        </div>
        <div className='judul-web-graph'>
           <h1>Graphic Design</h1>
           <h2>Portfolio</h2>
        </div>
        <div className='group-porto'>
         <div className='porto-design'>
              <a href="https://drive.google.com/drive/folders/16KUnfKpKeHZFSX_1EKemOCGX6UdF_hxU?usp=sharing" target='_blank' rel="noopener noreferrer"><h5>Logo <img src={panah} alt="" /></h5></a> 
         </div>
         <div className='porto-design'>
              <a href="https://drive.google.com/drive/folders/1rTi0DlFa6SG6uY44zL-YslpNxa1WLa-v?usp=sharing" target='_blank' rel="noopener noreferrer"><h5>Feed Instagram <img src={panah} alt="" /></h5></a>
         </div>
         <div className='porto-design'>
              <a href="https://drive.google.com/drive/folders/1eFFeDx4rsAqdevsMhrfMuM1NTxhbhie-?usp=sharing" target='_blank' rel="noopener noreferrer"><h5>Web Design <img src={panah} alt="" /></h5></a>
         </div>
         <div className='porto-design'>
              <a href="https://drive.google.com/drive/folders/1l8b7i29dJkvLUqbPgjwptxPIKqynvnzp?usp=sharing" target='_blank' rel="noopener noreferrer"><h5>Photography <img src={panah} alt="" /></h5></a>
            
         </div>
        </div>
      <Footer/>
    </div>
  )
}

export default GraphicDesign