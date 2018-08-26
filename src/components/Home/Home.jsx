import React from 'react';
import './home.css';
export const CHome = ({children, color }) => {
console.log('cooooooooooooooo---', color);
const styleColor = 'background:'+ color;
    return (
        <div className="home-page" style={{background: color}}>
            {children}
        </div>
    )
};

