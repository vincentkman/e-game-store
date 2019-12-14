import React, { useContext } from 'react';
import LandingPage from '../../components/LandingPage';
import TrolleyContainer from '../../components/trolley-components/TrolleyContainer';
import './trolley.scss';

function Trolley() {
    return (
        <>
            <div className='trolley-landing-page landing-page'>
                <div className='trolley-landing-page landing-page'>
                    <LandingPage title='TROLLEY' route='/games' btn_name='Browse Games' />
                </div>
            </div>
            <TrolleyContainer />
        </>
    );
}

export default Trolley;