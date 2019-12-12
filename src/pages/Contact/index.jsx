import React from 'react';
import LandingPage from '../../components/LandingPage';
import Form from '../../components/contact-components/Form';
import './contact.scss';

function Contact() {
    return (
        <div>
            <div className='contact-landing-page landing-page'>
                <LandingPage title='CONTACT US' route='/' btn_name='Return Home' />
            </div>
            <Form />
        </div>
    )
}

export default Contact;
