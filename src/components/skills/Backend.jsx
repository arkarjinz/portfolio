import React from 'react'
import {fadeIn} from "../../variant.jsx";
import {motion} from "framer-motion";

const Backend = () => {
    return (
        <motion.div className="skills__content"
             variants={fadeIn('down', 0.3)}
             initial="hidden" whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
        >
            <h3 className="skills__title">
                Backend Developer
            </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Spring</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Mysql</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Nodejs</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Backend
