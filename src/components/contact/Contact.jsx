import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"
import './contact.css'
import {motion} from "framer-motion";
import {fadeIn} from "../../variant.jsx";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ubg462i',
                'template_ru71rg2',
                form.current, {
                publicKey: '_fHevQNLvz1LV7Bnt',
            })
           e.target.reset()
    };

    return (
        <section className="contact section" id = "contact">
            <motion.h2 className="section__title"
                       variants={fadeIn('down', 0.3)}
                       initial="hidden" whileInView={'show'}
                       viewport={{once: false, amount: 0.1}}
            >Get in touch</motion.h2>
            <motion.span className="section__subtitle"
                         variants={fadeIn('down', 0.3)}
                         initial="hidden" whileInView={'show'}
                         viewport={{once: false, amount: 0.1}}
            >Contact me</motion.span>

            <motion.div className="contact__container container grid"
                        variants={fadeIn('down', 0.3)}
                        initial="hidden" whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
            >
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">jiniz090112@gmail.com</span>

                            <a href="mailto:jiniz090112@gmail.com.com" className="contact__button">Write Me{" "}<i
                                className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">999-999-999</span>

                            <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!" className="contact__button">Write Me{" "} <i
                                className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>

                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">user.fb223</span>

                            <a href="https://m.me/su.jin.39545464" className="contact__button">Write Me <i
                                className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form className="contact__form"
                          ref={form} onSubmit={sendEmail}
                    >
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text"
                                   name="name"
                                   className="contact__form-input"
                                   placeholder="Insert your name"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email"
                                   name="email"
                                   className="contact__form-input"
                                   placeholder="Insert your email"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Write your project"/>
                        </div>

                        <button className="button button--flex">
                            Send Message&nbsp;
                            <img src="/send.svg" alt="Send"/>
                        </button>
                    </form>
                </div>

            </motion.div>
        </section>
    )
}
export default Contact
