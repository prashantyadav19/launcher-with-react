import React from 'react';
import './frequentlyUsedApps.css';
import { Link } from 'react-router-dom';

export const CFrequentlyUsedApps = ({ children }) => (
    <div className="used-app">
        {children}
    </div>
);

export const CFAppItems = ({ children, gridType }) => {
    const itemClass = gridType === 'five' ? 'app-items five-mode' : 'app-items';
    return (
        <div className="frequently-list">
            <h3>Frequently Used Apps</h3>
            <div className={itemClass}>{children}</div>
        </div>
    );
}

export const CAppItem = ({  name, icon, id }) => (
    <div className="app-items-list">
        <Link to={"/app/" + id} >
            <div className="app-icon">
                <img src={icon} />
            </div>
        </Link>
    </div>
);