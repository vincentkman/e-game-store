import React from 'react';
import LandingPage from '../../components/LandingPage';
import './trolley.scss';

function Trolley() {
    return (
        <div className='trolley-landing-page landing-page'>
            <div className='trolley-landing-page landing-page'>
                <LandingPage title='TROLLEY' route='/games' btn_name='Browse Games' />
            </div>
        </div>
    );
}

export default Trolley;
