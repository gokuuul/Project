import React from 'react'
import './Footer.css'
import { useState } from 'react'
import whatsapp from '../Assets/whatsapp.jpg'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link,useHref } from 'react-router-dom'



  

  

const Footer = () => {
  const [showImage, setShowImage] = useState(false);
  const toggleImage = () => {
    setShowImage(!showImage);
  };
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li><Link to='/about'>About</Link></li>
        <li onClick={()=>window.scrollTo({ top: 0, behavior: "smooth"})}><Link to='/'>Products</Link></li>
        <li onClick={()=>window.location.href = "https://jecc.ac.in"}>college</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <li onClick={()=>window.location.href = "https://www.instagram.com/_gckul?igsh=cTdpYmhjOWRxajlx&utm_source=qr"}><img src={instagram_icon} alt="" /></li>
        </div>
        <div className="footer-icons-container">
          <li onClick={()=>window.location.href = ""}><img src={pintrest_icon} alt=""/></li>
        </div>
        <div className="footer-icons-container">  
          <li><button onClick={toggleImage}><img src={whatsapp_icon} alt="" /></button></li>
          {showImage && (
            <div className="image-popup">
            <img src={whatsapp} alt="popup_image" />
            </div>
          )}
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Group_09</p>
      </div>
    </div>
  )
}

export default Footer
