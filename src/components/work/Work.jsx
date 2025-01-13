import React from 'react'
import './work.css'
import Projects from "./Projects.jsx";
const Work = () => {
    return (
       <section className="work section" id="portfolio">
           <h2 className="section__title">Portfolio</h2>
           <span className="section__subtitle">Most recent projects</span>

            <Projects />
       </section>
    )
}
export default Work
