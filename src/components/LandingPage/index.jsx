import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.scss';

function LandingPage({ children, title, route, btn_name }) {
    return (
        <div className="landing-page-inner">
            <h1 className="landing-page-inner-item">{title}</h1>
            <Link to={route}>
                <button className="landing-page-inner-item-btn btn-default">{btn_name}</button>
            </Link>
            {children}
        </div>
    )
}

export default LandingPage;
