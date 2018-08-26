import React from 'react';
import './appsHolder.css';
import { Link } from 'react-router-dom';

export const CAppHolder = ({ children }) => (
    <div className="apps-holder-page four">
        {children}
    </div>
);

export const CApp = ({ name, icon, id }) => (
    <Link to={"/app/" + id} >
    <div className="app-icon">
        <img src={icon} />
        <span>{name}</span>
    </div>
    </Link>
);

export const CCategoryView = ({ children, category }) => (
    <div className="category-view">
        <h3> {category} </h3>
        <div className="category-item-list">{children} </div>
    </div>
);

