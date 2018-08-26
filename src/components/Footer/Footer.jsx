/**
 * footer component is use for creating footer and footer components
 */

import React from 'react';
import './footer.css';

/**
 * footer component use for allowing children
 * @param children
 * @constructor
 */
export const CFooter = ({ children }) => (
    <div className="footer">
        {children}
    </div>
);

/**
 * footer item component is use for allow items for footer
 * @param children
 * @constructor
 */
export const CFooterItems = ({ children }) => (
    <ul className="footer-items">
        {children}
    </ul>
);

/**
 * this component is use for showing footer items
 * @param name
 * @param handleClick
 * @returns {XML}
 * @constructor
 */
export const CFooterItem = ({ name, handleClick }) => {
   const icon = name === 'Frequently Used' ? 'fas fa-align-justify' : name === 'Category View' ? 'fas fa-list' : name === 'Grid Layouts' ? 'fas fa-th' : name === 'Color Picker' ? 'fas fa-palette' : '';
    return (
        <li className="footer-item" onClick={handleClick}>
        <i className={icon}></i>
        <span>{name}</span>
    </li>
    )
};

