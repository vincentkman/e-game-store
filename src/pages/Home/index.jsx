import React from 'react';
import LandingPage from '../../components/LandingPage';
import Messages from '../../components/home-components/Messages';
import FeaturedHostels from '../../components/home-components/FeaturedGames';
import './home.scss';

function Home() {
    return (
        <div className='home'>
            <div className='home-landing-page landing-page'>
                <LandingPage title='E-GAME STORE' route='/games' btn_name='Browse Games' />
            </div>
            <Messages />
            <FeaturedHostels />
        </div>
    );
}

export default Home;
