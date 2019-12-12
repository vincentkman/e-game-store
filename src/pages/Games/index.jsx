import React from 'react';
import LandingPage from '../../components/LandingPage';
import AllGames from '../../components/game-components/AllGames';
import './games.scss';

function Games() {
    return (
        <div className='games'>
            <div className='games-landing-page landing-page'>
                <LandingPage title='Games' route='/' btn_name='Return Home' />
            </div>
            <h1 className='title'>Games</h1>
            <AllGames />
        </div>
    );
}

export default Games;