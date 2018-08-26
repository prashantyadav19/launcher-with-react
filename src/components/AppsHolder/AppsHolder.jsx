import React from 'react';
import './appsHolder.css';
import { Link } from 'react-router-dom';

export const CAppHolder = ({ children }) => (
    <div className="apps-holder-page">
        {children}
    </div>
);

export const CApp = ({ name, icon, id }) => (
    <Link to={"/app/" + id} >
    <div className="app-icon">
        <img src={icon} />
        <br />
        <span>{name}</span>
    </div>
    </Link>
);

export const CCategoryView = ({ children, category }) => (
    <div className="category-view">
        <div> {category} </div>
        <div>{children} </div>
    </div>
);

