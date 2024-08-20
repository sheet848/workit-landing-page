import React from 'react'
import sitelogo from '../assets/logo-light.svg'

const Header = () => {
  return (
    <>
    <header>
      <div className="sec1">
        <img src={sitelogo} alt="dark-logo" />
      </div>
      <div className="sec2">
      <a>Apply for Success</a>
      </div>
    </header>
    </>
  )
}

export default Header