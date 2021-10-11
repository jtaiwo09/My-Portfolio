import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.unsplash.com/photo-1576398861031-41945bec2232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                I’m a Front-End Web Developer based in Lagos, Nigeria. I am passionate about coding, solving problems through code, and creating intuitive, and dynamic user experiences.
                </p>
                <p className="a-desc">
                I'm a well organised person, a problem solver with high attention to detail. I'm Interested in the entire frontend spectrum. The main area of my expertise are HTML, CSS, JavaScript, building small and medium web apps, and coding interactive layouts.
                </p>
            </div>
        </div>
    )
}

export default About
