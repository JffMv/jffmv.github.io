import React from 'react';
import './Header.css';
import logo from '../assets/jffmv.png'; // Asumiendo que la imagen está en la carpeta src/assets
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about-me" smooth={true} duration={500}>About Me</Link></li>
                    <li><Link to="experience-skills" smooth={true} duration={500}>Experience and Skills</Link></li>
                    <li><Link to="featured-projects" smooth={true} duration={500}>Featured Projects</Link></li>
                    <li><Link to="contact-me" smooth={true} duration={500}>Contact Me</Link></li>
                    <li><Link to="cv" smooth={true} duration={500}>CV</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
