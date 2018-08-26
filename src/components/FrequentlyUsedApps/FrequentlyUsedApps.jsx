/**
 * this component use for manage frequently used apps
 */
import React from 'react';
import './frequentlyUsedApps.css';
import { Link } from 'react-router-dom';

/**
 * this component is use for allow children component
 * @param children
 * @constructor
 */
export const CFrequentlyUsedApps = ({ children }) => (
    <div className="used-app">
        {children}
    </div>
);

/**
 * this component is use for allow items for frequently apps
 * @param children
 * @param gridType
 * @returns {XML}
 * @constructor
 */
export const CFAppItems = ({ children, gridType }) => {
    const itemClass = gridType === 'five' ? 'app-items five-mode' : 'app-items';
    return (
        <div className="frequently-list">
            <h3>Frequently Used Apps</h3>
            <div className={itemClass}>{children}</div>
        </div>
    );
}

/**
 * this component is use for showing frequently used app
 * @param name
 * @param icon
 * @param id
 * @constructor
 */
export const CAppItem = ({  name, icon, id }) => (
    <div className="app-items-list">
        <Link to={"/app/" + id} >
            <div className="app-icon">
                <img src={icon} />
            </div>
        </Link>
    </div>
);