import React from 'react';
import './AboutMe.css'; // Import the CSS file for styles
import picture_profile from '../assets/picture_profile.jpg';

const AboutMe = () => {
    return (
        <div id='about-me' className="about-me-container">
            <div className="about-me-content">
                <div className="profile-picture-container">
                    <img
                        src={picture_profile}
                        alt="Jefferson Mesa"
                        className="profile-picture"
                    />
                </div>
                <h1>Jefferson Mesa</h1>
                <h2>Systems Engineering student with an emphasis on software development and AI</h2>
                <div className="info-container">
                    <div className="info-section">
                        <h3>Education</h3>
                        <ul>
                            <li>Systems Engineering at Escuela Colombiana de Ingeniería Julio Garavito</li>
                            <li>Emphasis on Artificial Intelligence at Escuela Colombiana de Ingeniería Julio Garavito</li>
                            <li>Four semesters of Theology (28 courses)</li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <h3>Interests</h3>
                        <ul>
                            <li>Software Development</li>
                            <li>Cloud Computing</li>
                            <li>Artificial Intelligence</li>
                            <li>Machine Learning</li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
