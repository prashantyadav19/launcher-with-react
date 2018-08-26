import React from 'react';
import './search.css';
export const CSearch = ({ children }) => (
    <div className="search">
        {children}
    </div>
);

export const CSearchInput = ({ handleChange }) => (
    <div className="search-input">
        <input type="text" placeholder="search" onChange={handleChange}/>
    </div>
);
