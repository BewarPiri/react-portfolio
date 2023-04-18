import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ksxkssj', 'template_ecv7q6q', form.current, 'Kbc_jW9ih-XG6Hs8y')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className='head'>Contact Me</h2>

      <div className="container conact_container">
        <div className="contact_options">
        <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon'/>
        <h4>Mail</h4>
        <h5>BewarPiriDeveloper@gmail.com</h5>
        <a href='mailto:BewarPiriDeveloper@gmail.com' target='_blank'>Send a message</a>
        </article>

        <article className='contact_option'>
        <RiMessengerFill className='contact_option-icon' />
        <h4>Messenger</h4>
        <h5>Bewar Piri</h5>
        <a href='https://m.me/BewarPiri' target='_blank'>Send a message</a>
        </article>

        </div>
        { /* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input  type='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact