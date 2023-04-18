import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2 className='head'>Services</h2>
      <div className='container services_container'>
        <article className='services'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className='services'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}

        <article className='services'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */}

      </div>
    </section>
  )
}

export default Services;