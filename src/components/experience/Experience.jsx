import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5> 
      <h2 className='head'>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development
            <div className='experience_content'>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </h3>

          {/* END OF FRONTEND */}

        </div>
        <div className='experience_backend'>
          <h3>Backend Development
            <div className='experience_content'>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Express JS</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Experience;