import React from 'react'
import phone from '../assets/image-hero.webp'

const Hero = () => {
  return (
    <>
    <div className="hero-section">
      <h1>Data <em>tailored</em> to your needs.</h1>
      <button>Learn More</button>
      <img src={phone} alt="phone-img" />
    </div>
    </>
  )
}

export default Hero