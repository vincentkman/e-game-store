import React, { useContext } from 'react';
import { GameContext } from '../../../context';
import Game from '../../game-components/Game';
import Loading from '../../Loading';
// import GameItems from '../../game-components/GameItems';
import './featured-games.scss';

function FeaturedGames() {
    const { loading, featured, } = useContext(GameContext);
    return loading ?
        <Loading /> :
        <>
            <h3 className='title'>Hostels of the Year!</h3>
            <div className='featured-games'>
                {/* <GameItems games={featured} /> */}
                {
                    featured.map(item => (
                        <Game
                            key={item.id} 
                            {...item}
                        />
                    ))
                }
            </div>
        </>
}

export default FeaturedGames;

