import React from 'react'
import './intro.css';
import Profile  from '../../img/profile.png';

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Taiwo Joseph</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Graphics Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Artist</div>
                            <div className="i-title-item">Writer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    I specialize in designing and developing modern websites, web services, and online stores for customers of all sizes.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Profile} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
