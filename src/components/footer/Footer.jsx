import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer_logo'>Bewar Piri</a>

    <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    
    <div className='footer_socials'>
      <a href='https://facebook.com/BewarPiri' target="_blank" ><AiFillFacebook /></a>
      <a href='https://www.instagram.com/bewarpiri/' target='_blank'><AiFillInstagram /> </a>
    </div>

<div className='footer_copyright'>
<small>&copy; Bewar Piri. All rights reserved.</small>
</div>
    </footer>
  )
}

export default Footer