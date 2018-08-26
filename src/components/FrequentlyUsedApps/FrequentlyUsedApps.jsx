import React from 'react';
import './frequentlyUsedApps.css';
import { Link } from 'react-router-dom';

export const CFrequentlyUsedApps = ({ children }) => (
    <div className="used-app">
        {children}
    </div>
);

export const CFAppItems = ({ children }) => (
    <ul className="app-items">
        <span>Frequently Used Apps</span>
        {children}
    </ul>
);

export const CAppItem = ({  name, icon, id }) => (
    <div className="app-items">
        <Link to={"/app/" + id} >
            <div className="app-icon">
                <img src={icon} />
                <br />
                <span>{name}</span>
            </div>
        </Link>
    </div>
);