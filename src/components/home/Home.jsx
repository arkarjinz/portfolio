import React from 'react';
import { motion } from 'framer-motion';
import './home.css';
import Social from './Social.jsx';
import Data from './Data.jsx';
import Scrolldown from './Scrolldown.jsx';
import {fadeIn} from "../../variant.jsx";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <motion.div className="home__img"
                                variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>

                    </motion.div>
                    <Data />
                </div>
                <Scrolldown />
            </div>
        </section>
    );
};

export default Home;