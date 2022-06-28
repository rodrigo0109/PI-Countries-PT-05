import React from 'react';
import image from '../../images/profile.jpeg';
import './About.css';

const About = () => {
  return (
    <div className='about_container'>
      <div className='about_card'>
        <img src={image} alt={'profile'} />
        <div className='hero_container'>
          <h1 className='about_title'>Rodrigo Pérez</h1>
          <h1 className='about_subtitle'>Full Stack Developer</h1>
        </div>
        <div className='text_container'>
          <p>Hi, I´m Rodrigo and I am 28 years old. I am a Full Stack Developer from Buenos Aires, Argentina and currently i'm studying Systems Analyst at IRSO (Raúl Scalabrini Ortiz Institute). Since I graduated from school as an electronic technician I was interested in programming, especially with Javascript. I always been amazed on how can we create things from a simple idea making code.</p>
        </div>
        <a target="_blank" href="https://linkedin.com/in/rodrigo-perez-54073314b" rel="noopener noreferrer">CONTACT</a>
      </div>
    </div>
  )
}

export default About