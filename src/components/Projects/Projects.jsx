import React, { useState } from 'react'
import "./Projects.css"

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My Projects</span>
            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className=" uil-shopping-cart-alt projects__icon"></i>
                        <h3 className="projects__title">Beam SAAS</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button-icon" ></i></span>
                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Beam SAAS</h3>
                            <p className="projects__modal-description">BEAM is a SaaS application for managing product returns for online retailers. Built with Ruby on Rails for a solid backend, Vue.js for a dynamic frontend, and PostgreSQL for data management, my work enhanced the application's functionality and improved the overall user experience.
                            </p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Developed and maintained scalable web applications, enhancing performance and user experience.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Optimized server response time through efficient query optimization and resource management.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Troubleshoot and resolve bugs, reducing errors and improving system stability.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">Seller Central</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)} >View More <i className="uil uil-arrow-right projects__button-icon" ></i></span>
                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Seller Central Backend</h3>
                            <p className="projects__modal-description">Seller Central is a microservice that lets sellers manage return requests and view analytics, ensuring eﬃcient inventory management and customer interaction through an easy-to-use interface.</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Enhanced Seller Central UI for return management and analytics visibility, improving user experience.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Optimized frontend UI, fixed bugs, and improved application performance.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Collaborated with cross-functional teams to integrate new features, enhancing the seller experience
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-building projects__icon"></i>
                        <h3 className="projects__title">Airbnb Clone</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right projects__button-icon" ></i></span>
                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Airbnb Clone</h3>
                            <p className="projects__modal-description">A full-stack Airbnb clone built with Ruby on Rails, featuring user authentication, property listings, booking system, and search functionality. Implements CRUD operations, responsive design, and seamless user experience.</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Integrated front-end using HTML, CSS, JavaScript, and TailwindCSS for responsive and user-friendly UI.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Applied Rails best practices, validations, and error handling to ensure reliability and data integrity.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Used Git for version control and followed Agile practices for iterative development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil-book-alt projects__icon"></i>
                        <h3 className="projects__title">Book Store</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(4)}>View More <i className="uil uil-arrow-right projects__button-icon" ></i></span>
                    <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Book Store</h3>
                            <p className="projects__modal-description">Developed a dynamic web bookstore application using Ruby on Rails. The application allows users to create, edit, buy, and sell books. Integrated a payment API for secure transactions. Technologies Used: Ruby on Rails, Tailwind CSS, PostgreSQL, Git, GitHub, Unit Testing, Hotwire, API (Cash free Payment Gateway)
                            </p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Utilized Hotwire (Turbo + Stimulus) to deliver real-time updates without full page reloads.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Designed and implemented responsive UI using Tailwind CSS for an enhanced user experience.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Followed MVC architecture and Rails best practices to build scalable and maintainable code.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-store projects__icon"></i>
                        <h3 className="projects__title">Ecommerce</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(5)}>View More <i className="uil uil-arrow-right projects__button-icon" ></i></span>
                    <div className={toggleState === 5 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Plant E-commerce Website</h3>
                            <p className="projects__modal-description">Built a responsive full-stack plant store using HTML, CSS, JS, TailwindCSS, Node.js, Express, and MongoDB. Integrated Stripe for payments, Cloudinary for image management, and deployed on Vercel. Features include user auth, cart, and order processing.</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Developed user-friendly UI with TailwindCSS for seamless browsing across devices.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Implemented Stripe integration for secure and real-time payment processing.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Designed and developed RESTful APIs for cart, orders, and user management
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil-bag-alt projects__icon"></i>
                        <h3 className="projects__title">Portfolio</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(6)}>View More <i className="uil uil-arrow-right projects__button-icon" ></i></span>
                    <div className={toggleState === 6 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Portfolio Website</h3>
                            <p className="projects__modal-description">Built a responsive portfolio website using HTML, CSS, JavaScript, and React. Optimized for mobile and desktop, with clean UI/UX and smooth performance. Used Git for version control and hosted on GitHub.</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Implemented responsive design principles to ensure seamless user experience across all screen sizes.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Used React for modular, component-based development and efficient rendering.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Showcased projects, skills, and contact information in a clean, user-friendly layout.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
