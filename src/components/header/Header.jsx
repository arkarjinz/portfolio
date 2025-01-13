import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
    // Change background header on scroll
    useEffect(() => {
        const changeHeaderBackground = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", changeHeaderBackground);

        return () => {
            window.removeEventListener("scroll", changeHeaderBackground);
        };
    }, []);

    // Toggle Menu
    const [toggle, setToggle] = useState(false);

    // Active navigation logic
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const updateActiveNavOnScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 50;
                const sectionId = `#${section.getAttribute("id")}`;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    setActiveNav(sectionId);
                }
            });
        };

        window.addEventListener("scroll", updateActiveNavOnScroll);

        return () => {
            window.removeEventListener("scroll", updateActiveNavOnScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Zero
                </a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {[
                            { href: "#home", icon: "uil uil-estate", text: "Home" },
                            { href: "#about", icon: "uil uil-user", text: "About" },
                            { href: "#skills", icon: "uil uil-file-alt", text: "Skills" },
                            { href: "#services", icon: "uil uil-briefcase-alt", text: "Services" },
                            { href: "#portfolio", icon: "uil uil-scenery", text: "Portfolio" },
                            { href: "#contact", icon: "uil uil-message", text: "Contact" },
                        ].map((item, index) => (
                            <li key={index} className="nav__item">
                                <a
                                    href={item.href}
                                    onClick={() => setActiveNav(item.href)}
                                    className={`nav__link ${
                                        activeNav === item.href ? "active-link" : ""
                                    }`}
                                >
                                    <i className={`${item.icon} nav__icon`}></i>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
