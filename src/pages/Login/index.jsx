import React from 'react';
import LandingPage from '../../components/LandingPage';
import './login.scss';

function Login() {
    return (
        <div className='login-landing-page landing-page'>
            <div className='login-landing-page landing-page'>
                <LandingPage title='LOGIN' route='/games' btn_name='Browse Games' />
            </div>
        </div>
    );
}

export default Login;
