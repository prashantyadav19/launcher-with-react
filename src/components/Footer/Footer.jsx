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

export const CFooterItem = ({ name, handleClick }) => (
    <li className="footer-item" onClick={handleClick}>
        {name}
    </li>
);

