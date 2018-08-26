import React, { Component } from 'react';
import './appDetail.css';
import { Link } from 'react-router-dom';

export const CAppDetail = ({description, icon }) => (
    <div className="apps-detail-page">
        <img src={icon} />
        <p>{description}</p>
        <Link to={"/"} >Back</Link>
    </div>

);