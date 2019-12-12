import React from 'react';
import LandingPage from '../../components/LandingPage';
import './not-found.scss';

function NotFound() {
    return (
        <div className='not-found'>
            <div className='not-found-landing-page landing-page'>
                <LandingPage title='PAGE NOT FOUND' route='/' btn_name='Return Home' />
            </div>
        </div>
    );
}

export default NotFound;
