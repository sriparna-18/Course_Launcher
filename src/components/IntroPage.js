// src/components/IntroPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './IntroPage.css';

const IntroPage = () => {
    return (
        <div className="intro-page">
            <div className="animated-background">
                <div className="content">
                    <h1>Welcome to Our Educational Platform</h1>
                    <p>Explore our wide range of courses and start learning today!</p>
                    <Link to="/courses" className="explore-button">Explore Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default IntroPage;
