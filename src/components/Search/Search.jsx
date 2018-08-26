/**
 * this component us for search functionality
 */
import React from 'react';
import './search.css';

/**
 * this method is allow children components
 * @param children
 * @constructor
 */
export const CSearch = ({ children }) => (
    <div className="search">
        {children}
    </div>
);

/**
 * this method use for creating input box and handle input change events
 * @param handleChange
 * @constructor
 */
export const CSearchInput = ({ handleChange }) => (
    <div className="search-input">
        <input type="text" placeholder="search" onChange={handleChange}/>
    </div>
);
