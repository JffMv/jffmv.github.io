import React from 'react';
import { Mail, Linkedin } from 'lucide-react'; // Importing icons
import './ContactInfo.css'; // Import the CSS file for styling

const ContactInfo = () => {
    return (
        <div id="contact-me" className="info-section contact-section">
            <h3>Contact</h3>
            <ul>
                <li>
                    <Linkedin className="contact-icon" />
                    <a href="https://www.linkedin.com/in/yeferson-mesa-91b9491ab/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/YefersonMesa
                    </a>
                </li>
                <li>
                    <Mail className="contact-icon" />
                    <a href="mailto:yeferson.mesa.v@gmail.com">yeferson.mesa.v@gmail.com</a>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;
