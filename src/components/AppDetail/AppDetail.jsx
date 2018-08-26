import React, { Component } from 'react';
import './appDetail.css';

export const CAppDetail = ({ name, category, description }) => (
    <div className="apps-detail-page">
        Name: {name} <br />
        Category: {category} <br />
        Description: {description}
    </div>
);