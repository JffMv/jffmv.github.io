import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/jffmv.png"; // Asegúrate de tener el logo en la carpeta correcta
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Íconos de hamburguesa

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
            setIsVisible(false); // Ocultar al hacer scroll hacia abajo
        } else {
            setIsVisible(true); // Mostrar al hacer scroll hacia arriba
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isVisible ? "visible" : "hidden"}`}>
            <div className="header-container">
                <img src={logo} alt="Logo" className="logo" />
                
                {/* Botón menú hamburguesa */}
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Menú */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="about-me" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About Me</Link></li>
                        <li><Link to="experience-and-skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Experience and Skills</Link></li>
                        <li><Link to="featured-project" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Featured Project</Link></li>
                        <li><Link to="contact-me" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact Me</Link></li>
                        <li><Link to="cv" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>CV</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
