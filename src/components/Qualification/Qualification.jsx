import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Learning Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Technology (IT)</h3>
                                <span className="qualification__subtitle">Sage University Indore</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                                </div>
                            </div>
                            <div >
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div >
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12<sup>th</sup> Board</h3>
                                <span className="qualification__subtitle">Gurukul Academy Dhar</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10<sup>th</sup> Board</h3>
                                <span className="qualification__subtitle">Gurukul Academy Dhar</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2016
                                </div>
                            </div>
                            <div >
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer Intern</h3>
                                <span className="qualification__subtitle">Binary Solutions</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct 2021 - Apr 2022
                                </div>
                            </div>
                            <div >
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div >
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Trainee Software Developer</h3>
                                <span className="qualification__subtitle">Blubirch</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct 2022 - Dec 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2024 - Present
                                </div>
                            </div>
                            <div >
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
