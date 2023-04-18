import React from 'react'
import './qualification.css'
import AVATAR1 from '../../assets/Collaboration-Mindset.jpeg'
import AVATAR2 from '../../assets/technicality.png'
import AVATAR3 from '../../assets/problem-solver:analytical.jpeg'
import AVATAR4 from '../../assets/communication4.webp'
import AVATAR5 from '../../assets/stay-up-to-date.avif'
import {Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
{
symbol: AVATAR2,
keyword: 'Technicality',
description: 'Proficient in implementing back-end systems, develope and integrate front-end features!',
},
{
symbol: AVATAR3,
keyword: 'Problem-solving and analytical',
description: 'Think critically and come up with innovative solutions to complex technical challenges!',
},
{
  symbol: AVATAR4,
  keyword: 'Communication',
  description: 'Effective communication skills in cross-functional teams with clear ideas!',
},
{
  symbol: AVATAR1,
  keyword: 'Collaboration and teamwork',
  description: 'Collaborative processes requires working effectively in teams to develop high-quality software!',
},
{
  symbol: AVATAR5,
  keyword: 'Learning and adaptability',
  description: 'Constantly evolving and adapting with the latest technologies and tools!',
},
]

const Qualification = () => {
  return (
    <section id="qualification">
     <h2 className='keyword'>Key Qualifications</h2>

      <Swiper className='container qualification_container'
            // install Swiper modules
            modules={[Pagination, Navigation, A11y ]}
            pagination={{ clickable: true }}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({symbol, keyword, description}, index )=>{
            return (
              
    <SwiperSlide key={index} className='qualification'>
      <div className="symbol">
        <img className='img' src={symbol} />
      </div>
        <h5 className='keyword'>{keyword}</h5>
        <small className='keyword_description'>{description}</small>
    </SwiperSlide>

            )
            })
        }
      </Swiper>
    
    </section>
  )
}

export default Qualification;