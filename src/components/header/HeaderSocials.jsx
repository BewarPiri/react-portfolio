import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/bewar-piri-7a522ab3/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/BewarPiri" target="_blank"><FaGithub/></a>
        <a href="https://facebook.com/BewarPiri" target="_blank"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials;