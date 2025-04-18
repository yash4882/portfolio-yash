import React from 'react';
import './About.css';
import AboutImg from "../../assets/about.png";
import CV from "../../assets/cv.pdf";
import Info from "./Info";
import file from "../../assets/files.svg"

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section__title'>About</h2>
            <span className='section__subtitle'>My Introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="about-img" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">Web Developer with a year of experience building scalable web apps using Ruby on Rails and PostgreSQL. Skilled in API development, React, HTML, CSS, and JavaScript. Passionate about clean code, performance, and user-centric design. </p>
                    <a href={CV} download="" className='button button--flex cv__button'>Download CV<img src={file} alt="icon" style={{
                        filter: "invert(1)", marginLeft: "0.5rem", width: "18px",
                        height: "18px"
                    }} /></a>
                </div>
            </div>
        </section>
    )
}

export default About
