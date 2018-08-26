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
    if (name === 'Frequently Used') {
        return <li className="footer-item" onClick={handleClick}>
            <i class="fas fa-align-justify"></i>
            <span>{name}</span>
        </li>
    } else  if (name === 'Category View') {
        return <li className="footer-item" onClick={handleClick}>
            <i class="fas fa-align-justify"></i>
            <span>{name}</span>
        </li>
    } else  if (name === 'Grid Layouts') {
        return <li className="footer-item" onClick={handleClick}>
            <i class="fas fa-align-justify"></i>
            <span>{name}</span>
            <div className="list-change-mode block-list">
                <ul>
                    <li>3 x 4 Mode</li>
                    <li>4 x 4 Mode</li>
                    <li>4 x 5 Mode</li>
                </ul>
            </div>
        </li>
    } else  if (name === 'Color Picker') {
        return <li className="footer-item" onClick={handleClick}>
            <i class="fas fa-align-justify"></i>
            <span>{name}</span>
        </li>
    }
};

