import React from 'react'
import './skills.css'
import {motion} from "framer-motion";
import {fadeIn} from "../../variant.jsx";
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <motion.h2 className="section__title" variants={fadeIn('down', 0.1)} initial="hidden" whileInView={'show'}
                       viewport={{once: false, amount: 0.1}}>Skills
            </motion.h2>
            <motion.span className="section__subtitle" variants={fadeIn('down', 0.2)} initial="hidden"
                         whileInView={'show'} viewport={{once: false, amount: 0.7}}>My technical level
            </motion.span>
            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}
export default Skills
