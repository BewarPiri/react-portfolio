import React from 'react'
import './about.css'
import ME from '../../assets/ME2.jpg'
import {BsPersonWorkspace} from 'react-icons/bs'
import {IoIosSchool} from 'react-icons/io'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
<section id="about">
  <h5>Get to Know</h5>
  <h2 className='head'>About me</h2>

  <div className="container about_container">
    <div className="about_me">
      <div className="about_me-image">
        <img src={ME} alt="About Image"></img>
      </div>
    </div>

    <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
          <BsPersonWorkspace className="about_icon"/>
          <h5>Experience</h5>
          <small>6 Months + Developer Experience</small>

        </article>

        <article className="about_card">
          <IoIosSchool className="about_icon"/>
          <h5>Education</h5>
          <small>Bachelor´s Degree In Administration And Leadership</small>
          <br></br>
          <small>&</small>
          <br></br>
          <small>Master´s Degree In Public Pdministration Dnd Governance</small>

        </article>

        <article className="about_card">
          <VscFolderLibrary  className="about_icon"/>
          <h5>Projects</h5>
          <small>2 + completed and more under development...</small>

        </article>
      </div>

      <p>
      As a public management and administration graduate, I have had the opportunity to gain diverse experiences in various fields through my master-degree. Alongside my education i have worked as personal assistant, substitute teacher in secondary school, and exploring the world of sales and customer service, my journey has been varied and enriching.
      <br></br>
      <br></br>

My passion for technology led me to delve into the world of software development, and I am now a full-stack JavaScript developer with hands-on experience in both front-end and back-end development. With my expertise in JavaScript, I can confidently build responsive and scalable web applications that meet business needs.
<br></br>
<br></br>

Through my journey, I have gained strong interpersonal skills, problem-solving abilities, and the ability to work collaboratively in a team. I am committed to delivering high-quality work and constantly enhancing my skills to meet the dynamic needs of the industry.

Looking for opportunities to leverage my skills and experience, I am excited to connect with like-minded professionals and explore new possibilities.
      </p>

      <a href="#contact" className="btn">Let´s talk</a>
    </div>
  </div>
</section>
  )
}

export default About