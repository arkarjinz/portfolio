import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from "../../variant.jsx";

const Social = () => {
    return (
        <motion.div
            className="home__social"
            variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>

            <a href="https://www.instagram.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/arkar-moe-16041a326" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/arkarjinz" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
        </motion.div>
    );
};

export default Social;