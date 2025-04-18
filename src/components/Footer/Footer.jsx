import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__conatiner conatiner">
                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#skills" className="footer__link">Skills</a></li>
                    <li><a href="#projects" className="footer__link">Projects</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/yash4882" className='footer__social-link' target='_blank'><i className='uil uil-github-alt'></i></a>
                    <a href="https://www.linkedin.com/in/yash-vasundhariya-6069bb196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='footer__social-link' target='_blank'><i className='uil-linkedin-alt'></i></a>
                    <a href="https://api.whatsapp.com/send?phone=9098090315&text=Hello,%20Yash!" className='footer__social-link' target='_blank'><i className='uil uil-whatsapp'></i></a>
                </div>
                <span className='footer__copy'>Yash - Portfolio &#169; All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer
