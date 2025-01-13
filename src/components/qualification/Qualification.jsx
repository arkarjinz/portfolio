import React, { useState } from 'react';
import './qualification.css';
import {motion} from "framer-motion";
import {fadeIn} from "../../variant.jsx";

const Qualification = () => {
    const [activeTab, setActiveTab] = useState(1); // 1 for Education, 2 for Experience

    return (
        <motion.section className="qualification section"
                        variants={fadeIn('down', 0.3)}
                        initial="hidden" whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
        >
            <motion.h2 className="section__title"
                       variants={fadeIn('down', 0.3)}
                       initial="hidden" whileInView={'show'}
                       viewport={{once: false, amount: 0.1}}
            >
                Qualification</motion.h2>
            <motion.span className="section__subtitle"
                         variants={fadeIn('down', 0.3)}
                         initial="hidden" whileInView={'show'}
                         viewport={{once: false, amount: 0.1}}
            >My Professional Journey</motion.span>

            <motion.div className="qualification__container container" variants={fadeIn('down', 0.3)}
                       initial="hidden" whileInView={'show'}
                       viewport={{once: false, amount: 0.3}}
            >
                <div className="qualification__tabs">
                    {/* Education Tab */}
                    <div
                        className={`qualification__button button--flex ${
                            activeTab === 1 ? 'qualification__active' : ''
                        }`}
                        onClick={() => setActiveTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    {/* Experience Tab */}
                    <div
                        className={`qualification__button button--flex ${
                            activeTab === 2 ? 'qualification__active' : ''
                        }`}
                        onClick={() => setActiveTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Section */}
                    <div
                        className={`qualification__content ${
                            activeTab === 1 ? 'qualification__content-active' : ''
                        }`}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full-Stack Web Development</h3>
                                <span className="qualification__subtitle">Online - Code Academy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Mobile App Development</h3>
                                <span className="qualification__subtitle">Myanmar - Tech University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Engineering</h3>
                                <span className="qualification__subtitle">Online - Coursera</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Architecture</h3>
                                <span className="qualification__subtitle">Myanmar - Tech Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2023
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div
                        className={`qualification__content ${
                            activeTab === 2 ? 'qualification__content-active' : ''
                        }`}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Engineer</h3>
                                <span className="qualification__subtitle">Tech Solutions - Myanmar</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2025 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Mobile Application Developer</h3>
                                <span className="qualification__subtitle">Innovate Tech - Myanmar</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - 2025
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">CodeMasters - Myanmar</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Tech Innovators - Myanmar</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Qualification;
