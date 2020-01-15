import React from 'react';
import LandingPage from '../../components/LandingPage';
import { Jumbotron } from 'reactstrap';
import './about.scss';

function About() {
    return (
        <div className='about'>
            <div className='about-landing-page landing-page'>
                <LandingPage title='ABOUT' route='/games' btn_name='Browse Games' />
            </div>
            <div className='about-detail'>
                <h3 className='title'>About Us</h3>
                <Jumbotron className='about-detail-container'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos natus aspernatur eius inventore alias vitae debitis vel mollitia nam modi, id temporibus corporis, explicabo ipsa quasi. Modi, rerum vitae.</p>
                </Jumbotron>
            </div>
        </div>
    );
}

export default About;