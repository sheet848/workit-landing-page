import React from 'react'
import sitelogo from '../assets/logo-dark.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import insta from  '../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <>
    <footer>
        <img src={sitelogo} alt="dark-logo" />
        <div className="social-links">
            <img src={facebook} alt="facebook-img" />
            <img src={twitter} alt="twitter-img" />
            <img src={insta} alt="instagram -img" />
        </div>
    </footer>
    </>
  )
}

export default Footer