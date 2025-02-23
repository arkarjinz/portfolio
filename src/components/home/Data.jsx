import React from 'react'
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import {fadeIn} from "../../variant.jsx";

const Data = () => {
    return (
        <motion.div
            className="home__data"
            variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>
            <h1 className="home__title">
                <TypeAnimation
                sequence={[
                    'A', 2000,
                    'Ar', 2000,
                    'Ark', 2000,
                    'Arkar', 2000,
                    'Arkar M', 2000,
                    'Arkar Mo', 2000,
                    'Arkar Moe', 2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                style={{ display: 'inline-block' }}
                cursor={false}
                repeatDelay={3000}
            />
                <img src="/space.svg" alt="Space"/>
            </h1>

            <h3 className="home__subtitle">

                        Full-stack Developer
            </h3>

            <p className="home__description">
                I&#39;m studying to become a full-stack developer. I love coding and solving problems. I'm always eager to
                learn new technologies. I&#39;m very passionate and dedicated to my studies.
            </p>
            <a href="#contact" className="button button--flex">
                Say Hello&nbsp;
                <img src="/src/assets/send.svg" alt="Send"/>
            </a>
        </motion.div>
    )
}
export default Data
