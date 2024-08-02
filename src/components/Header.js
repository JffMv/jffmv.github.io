import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/jffmv.png'; // Asumiendo que la imagen está en la carpeta src/assets
import { Link } from 'react-scroll';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
            // Scroll hacia abajo
            setIsVisible(false);
        } else {
            // Scroll hacia arriba
            setIsVisible(true);
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about-me" smooth={true} duration={500}>About Me</Link></li>
                    <li><Link to="experience-and-skills" smooth={true} duration={500}>Experience and Skills</Link></li>
                    <li><Link to="featured-project" smooth={true} duration={500}>Featured Project</Link></li>
                    <li><Link to="contact-me" smooth={true} duration={500}>Contact Me</Link></li>
                    <li><Link to="cv" smooth={true} duration={500}>CV</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
