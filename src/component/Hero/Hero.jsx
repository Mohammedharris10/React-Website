import React from 'react'
import "./Hero.css"
import hand_icon from "../asset/hand_icon.png"
import arrow_icon from "../asset/arrow.png"
import hero_image from "../asset/hero_image.png"


export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Lastest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}
