import React from 'react'
import { ReactComponent as Scroll } from '../../assets/scroll.svg';

const ScrollDown = () => {
    return (
        <div className='home__scroll'>
            <a href="#about" className="home__scroll-button button--flex">
                <Scroll style={{ height: "24px", width: "24px" }} />
                <span className='home__scroll-name'>scroll down</span>
                <i className='uil uil-arrow-down home__scroll-arrow'></i>
            </a>
        </div>
    )
}

export default ScrollDown
