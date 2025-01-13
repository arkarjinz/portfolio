import React, {useState} from 'react'
import {fadeIn} from "../../variant.jsx";
import {motion} from "framer-motion";
import './services.css'

const Services = () => {
    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    }

    return (
        <section className="services section" id="services">
               <motion.h2 className="section__title"
                   variants={fadeIn('down', 0.3)}
                   initial="hidden" whileInView={'show'}
                   viewport={{once: false, amount: 0.1}}
               >
                   Services
               </motion.h2>
            <motion.span className="section__subtitle"
                         variants={fadeIn('down', 0.3)}
                         initial="hidden" whileInView={'show'}
                         viewport={{once: false, amount: 0.2}}
             >
                What I offer
            </motion.span>
            <div className="services__container container grid">
                <motion.div className="services__content"
                            variants={fadeIn('down', 0.3)}
                            initial="hidden" whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}>
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Web <br/> Development
                        </h3>
                        <span className="services__button" onClick={() => toggleTab(1)}>View More
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>

                        <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <h3 className="services__modal-title">Web Development</h3>
                                <p className="services__modal-description">Providing quality work to clients and
                                    companies</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Developing responsive websites optimized for
                                            various devices and screen sizes</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Creating dynamic, data-driven web
                                            applications using modern frameworks and technologies</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Implementing secure user authentication and
                                            data protection mechanisms</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Integrating APIs to enable seamless
                                            communication between systems and services</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Collaborating with designers to implement
                                            UI/UX principles effectively</p>
                                    </li>

                                </ul>

                            </div>


                        </div>
                    </div>
                </motion.div>

                <motion.div className="services__content"
                            variants={fadeIn('down', 0.3)}
                            initial="hidden" whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}>
                    <div>
                        <i className="uil uil-mobile-android services__icon"></i>
                        <h3 className="services__title">
                            Mobile <br/> App Development
                        </h3>
                        <span className="services__button" onClick={() => toggleTab(2)}>View More
                            <i className="uil uil-arrow-right services__button-icon"></i>
        </span>

                        <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <h3 className="services__modal-title">Mobile App Development</h3>
                                <p className="services__modal-description">Delivering efficient and user-friendly mobile
                                    applications</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Building native and cross-platform mobile
                                            applications</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Implementing secure user authentication for
                                            mobile apps</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Integrating third-party services like payment
                                            gateways</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Ensuring smooth and seamless UI/UX for
                                            users</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Optimizing app performance and battery
                                            usage</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div className="services__content"
                            variants={fadeIn('down', 0.3)}
                            initial="hidden" whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}>
                    <div>
                        <i className="uil uil-server-network services__icon"></i>
                        <h3 className="services__title">
                            Backend <br/> Development
                        </h3>
                        <span className="services__button" onClick={() => toggleTab(3)}>View More
                            <i className="uil uil-arrow-right services__button-icon"></i>
        </span>

                        <div className={toggle === 3 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <h3 className="services__modal-title">Backend Development</h3>
                                <p className="services__modal-description">Ensuring the functionality, scalability, and
                                    security of server-side systems</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Designing and managing databases (SQL and
                                            NoSQL)</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Building RESTful and GraphQL APIs for
                                            seamless data communication</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Implementing server-side logic to handle
                                            complex business requirements</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Integrating cloud services and managing
                                            server infrastructure</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Monitoring and debugging server-side errors
                                            to ensure uptime</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Services
