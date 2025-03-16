import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../assets/jffmv.png"; // Asegúrate de tener el logo en la carpeta correcta
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Íconos de hamburguesa

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    let lastScrollTop = useRef(0);

    // Manejo del scroll para mostrar u ocultar el header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(currentScrollTop < lastScrollTop.current);
            lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Cierra el menú si se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className={`header ${isVisible ? "visible" : "hidden"}`}>
            <div className="header-container">
                <img src={logo} alt="Logo" className="logo" />
                
                {/* Botón menú hamburguesa */}
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Menú */}
                <nav ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="about-me" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About Me</Link></li>
                        <li><Link to="experience-and-skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Experience and Skills</Link></li>
                        <li><Link to="featured-project" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Featured Project</Link></li>
                        <li><Link to="contact-me" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact Me</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
