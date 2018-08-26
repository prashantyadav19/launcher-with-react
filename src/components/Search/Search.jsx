import React from 'react';
import './search.css';
export const CSearch = ({ children }) => (
    <div className="search">
        {children}
    </div>
);

export const CSearchInput = ({ }) => (
    <div className="search-input">
        <input type="text" placeholder="search" />
    </div>
);
