import React from 'react';
import './frequentlyUsedApps.css';
export const CFrequentlyUsedApps = ({ children }) => (
    <div className="used-app">
        {children}
    </div>
);

export const CFAppItems = ({ children }) => (
    <ul className="app-items">
        {children}
    </ul>
);

export const CAppItem = ({ name }) => (
    <li className="app-items">
        {name}
    </li>
);