import React from 'react'
import profile from '../img/profile.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/AboutMe' style={{ textDecoration: 'none' }}><h5>About Me<img src={profile} alt="" /></h5></Link>
    </div>
  )
}

export default Footer