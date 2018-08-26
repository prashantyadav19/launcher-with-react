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
        <i class="fas fa-align-justify"></i>
        <span>Frequently Used</span>
        {name == 'GL' ?<div className="list-change-mode block-list">
            <ul>
                <li>3-4 Mode</li>
                <li>4-4 Mode</li>
                <li>4-5 Mode</li>
            </ul>
        </div> : ''}
    </li>
);

