import React from 'react'
import founder from '../assets/image-founder.webp'

const Apply = () => {
  return (
    <>
    <div className="apply-section">
      <img src={founder} alt="founders-img" />
      <div className="end-box">
        <h2>Be the first to test</h2>
        <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
        <button>Apply for access</button>
      </div>
    </div>
    </>
  )
}

export default Apply