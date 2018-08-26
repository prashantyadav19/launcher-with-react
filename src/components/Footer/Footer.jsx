import React from 'react';
import './footer.css';
export const CFooter = ({ children }) => (
    <div className="footer">
        {children}
    </div>
);

export const CFooterItems = ({ children }) => (
    <ul className="footer-items">
        {children}
    </ul>
);

export const CFooterItem = ({ name, handleClick }) => {
   const icon = name === 'Frequently Used' ? 'fas fa-align-justify' : name === 'Category View' ? 'fas fa-list' : name === 'Grid Layouts' ? 'fas fa-th' : name === 'Color Picker' ? 'fas fa-palette' : '';
    return (
        <li className="footer-item" onClick={handleClick}>
        <i className={icon}></i>
        <span>{name}</span>
    </li>
    )
};

