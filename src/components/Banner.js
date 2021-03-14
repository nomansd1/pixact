import React from 'react'
import './Banner.css'

import banner__anime from './9675abf5-97de-4ae3-87bd-54008033a4b5.jpg'

function Banner( {caption, details, cName} ) {
    return (
        <div className={`banner ${cName}`}>
            <div className="anime">
                <img className="anime__pic" src={banner__anime} alt="..." />
            </div>
            
            <div className="slider__container">
                <div className="slider">
                    <input type="radio" name="slider" title="slide1" checked="checked" className="slider__nav" />
                    <input type="radio" name="slider" title="slide2" checked="checked" className="slider__nav" />
                    <div className="slider__inner">
                        <div className="slider__contents">
                            <h2 className="slider__caption"> {caption} </h2>
                            <p className="slider__txt"> {details} </p>
                        </div>
                        <div className="slider__contents">
                            <h2 className="slider__caption"> {caption} </h2>
                            <p className="slider__txt"> {details} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
