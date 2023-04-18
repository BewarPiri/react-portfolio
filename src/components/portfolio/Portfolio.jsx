import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/MoneyMates.svg'
import IMG2 from '../../assets/tetris.jpeg'
import {FaGithub} from 'react-icons/fa'

const data = [
  {  id: 1, 
    image: IMG1,
    title: "MoneyMates-Frontend",
    github: 'https://github.com/BewarPiri/MoneyMates-Frontend',
  },
  {  id: 2, 
    image: IMG1,
    title: "MoneyMates-Backend",
    github: 'https://github.com/BewarPiri/MoneyMates-Backend',
  },
  {  id: 3, 
    image: IMG2,
    title: "Tetris",
    github: 'https://github.com/BewarPiri/Tetris',
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My projects</h5>
      <h2 className='head'>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github})=> {
            return (
              <article key={id} className='portfolio_item'>
              <img src={image} alt={title} className="portfolio_item-image" />
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
              <a href={github} className='btn' target='_blank'>Github <FaGithub /> </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;