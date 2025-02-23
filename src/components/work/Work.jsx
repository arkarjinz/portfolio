import React from 'react'
import './work.css'
import Projects from "./Projects.jsx";

import {motion} from "framer-motion";
import {fadeIn} from "../../variant.jsx";
const Work = () => {
    return (
       <motion.section className="work section" id="portfolio"
                       variants={fadeIn('down', 0.3)}
                       initial="hidden" whileInView={'show'}
                       viewport={{once: false, amount: 0.1}}>
           <h2 className="section__title">Portfolio</h2>
           <span className="section__subtitle">Most recent projects</span>

            <Projects />
       </motion.section>
    )
}
export default Work
