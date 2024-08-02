// src/components/ProjectViewer.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './FeaturedProject.css';

const FeaturedProject = () => {
    const [files, setFiles] = useState([
        'Home.md',
        'Architecture.md',
        'Design-of-the-back‐end.md',
        'Displays-of-original.md',
        'Stories-of-User.md'
    ]);
    const [selectedFile, setSelectedFile] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (selectedFile) {
            fetch(`/Emulator-Among-Us-Front.wiki/${selectedFile}`)
                .then(response => response.text())
                .then(data => setContent(data))
                .catch(error => console.error('Error loading file:', error));
        }
    }, [selectedFile]);

    return (
        <div className="featured-project">
            <h1 className="h1-1">Featured Project - Emulator of Among Us</h1>
            <a className= "h2-1" href="https://github.com/JffMv/Emulator-Among-Us-Front">
                <h2>Repository</h2>
            </a>
            <nav className="nav-container">
                <ul className="nav-1">
                    {files.map(file => (
                        <li className="nav-item" key={file} onClick={() => setSelectedFile(file)}>
                            {file}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="info-container-1">
                <div className="info-section-1">
                    {selectedFile ? <ReactMarkdown>{content}</ReactMarkdown> : <h2></h2>}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
