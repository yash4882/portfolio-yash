import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import send from "../../assets/send.svg";
import "./Contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nznsxlo', 'template_jbh7x9u', form.current, {
                publicKey: 'U_xOw3Ptqhmp2lHak',
            })
            e.target.reset()
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Let’s Connect</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Mail</h3>
                            <span className="contact__card-data">yashvasundhariya.1@gmail.com</span>

                            <a href="mailto:yashvasundhariya.1@gmail.com" className="contact__button">
                                Mail Me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-phone contact__card-icon"></i>
                            <h3 className="contact__card-title">Phone</h3>
                            <span className="contact__card-data">+91-9098090315</span>

                            <a href="tel:+919098090315" className="contact__button">
                                Ring Me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+91-9098090315</span>

                            <a href="https://api.whatsapp.com/send?phone=9098090315&text=Hello, Yash!" className="contact__button">Let's Chat <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Enter your message below</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Full Name</label>
                            <input type="text" name='name' className="contact__form-input" placeholder='Enter Your Name' />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name='email' className="contact__form-input" placeholder='Enter Your Email' />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder='Enter Your Message'></textarea>
                        </div>
                        <button className='button button--flex'>Send Message<img src={send} alt="hello" style={{
                            filter: "invert(1)", marginLeft: "0.5rem", width: "18px",
                            height: "18px"
                        }} /></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
