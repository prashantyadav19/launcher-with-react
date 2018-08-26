import React from 'react';
import './home.css';
export const CHome = ({children, color }) => {
const styleColor = 'background:'+ color;
    return (
        <div className="home-page" style={{background: color}}>
            {children}
        </div>
    )
};

export const CGridView = ({ children, mode }) => {
    const grid = mode ? 'list-change-mode block-list' : 'list-change-mode';
    return (
        <div className={grid}>
            <ul>
                {children}
            </ul>
        </div>
    )
};

export const CGridViewItem = ({ name, handleClick }) => {
    return (
        <li className="grid-item" onClick={handleClick}>
           <span>{name}</span>
        </li>
    )
};

