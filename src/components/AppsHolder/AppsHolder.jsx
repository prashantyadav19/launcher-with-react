import React from 'react';
import './appsHolder.css';
export const CAppHolder = ({ children }) => (
    <div className="apps-holder-page">
        {children}
    </div>
);

export const CApp = ({ name, icon }) => (
    <div className="app-icon">
        <a href="" >
        <img src={icon} />
        <br />
        <span>{name}</span>
        </a>
    </div>
);
