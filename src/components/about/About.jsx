import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './about.css';
import AboutImg from '../../assets/about.png';
import CV from '../../assets/Arkar-CV.pdf';
import Info from './Info.jsx';
import {fadeIn} from "../../variant.jsx";

const About = () => {
    return (
        <AnimatePresence>
            <section className="about section" id="about">
                <motion.h2 className="section__title" variants={fadeIn('down', 0.1)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.1}}>About Me</motion.h2>
                <motion.span className="section__subtitle" variants={fadeIn('down', 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>My introduction</motion.span>
                <motion.div className="about__container container grid" >
                    <motion.img
                        src={AboutImg}
                        alt="About"
                        className="about__img"
                        variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
                    />
                    <motion.div
                        className="about__data"
                        variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
                    >
                        <Info />
                        <p className="about__description">
                            Frontend developer, I create web pages with UI / UX user interface, I don&#39;t have any experienced yet. But my teachers are happy with the projects carried out.
                        </p>
                        <a download="" href={CV} className="button button--flex">
                            Download CV&nbsp;&nbsp;
                            <img src="/files.svg" alt="" />
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </AnimatePresence>
    );
};

export default About;