import React from 'react';
import LandingPage from '../../components/LandingPage';
import './checkout.scss';

function Checkout() {
    return (
        <div className='checkout-landing-page landing-page'>
            <div className='checkout-landing-page landing-page'>
                <LandingPage title='CHECKOUT' route='/games' btn_name='Browse Games' />
            </div>
        </div>
    );
}

export default Checkout;
