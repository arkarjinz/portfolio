import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../variant.jsx";
const Frontend = () => {
    return (
        <motion.div className="skills__content"
                    variants={fadeIn('down', 0.3)}
                    initial="hidden" whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
        >
            <h3 className="skills__title">
                 Frontend Developer
            </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Frontend
