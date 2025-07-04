import React from 'react'
// import footer_logo from '../asset/footer_logo.png'
import instagram_icon from "../asset/instagram_icon.png"
import whatsapp_icon from "../asset/whatsapp_icon.png"
import "./Footer.css"

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
        <div className="footer-logo">
            {/* <img src={footer_logo} alt="" /> */}
            <p>SHOPPING</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p><p>© {currentYear} Mohammed Harris. All rights reserved.</p></p>
        </div>
    </div>
  )
}
