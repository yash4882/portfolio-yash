import React from 'react'
import send from "../../assets/send.svg";
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const Data = () => {
    return (
        <div className='home__data'>
            <h1 className='home__title'>I'm Yash Vasundhariya</h1>
            <h3 className='home__subtitle'><TypingAnimation /></h3>
            <p className='home__description'>I'm a passionate Web Developer based in India, with a love for building fast, scalable, and elegant web applications.</p>
            <a href="#contact" className='button button--flex'>Let’s conn.<img src={send} alt="hello" style={{
                filter: "invert(1)", marginLeft: "0.5rem", width: "18px",
                height: "18px"
            }} /></a>
        </div>
    )
}

export default Data
