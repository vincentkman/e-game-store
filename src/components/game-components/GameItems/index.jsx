import React from 'react';
import Game from '../Game';
import '../../game-components/AllGames/all-games.scss';

function GameItems({ games }) {
    return (
        <div>
            <div className='all-games'>
                {
                    games.map(item => (
                        <Game
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default GameItems;
