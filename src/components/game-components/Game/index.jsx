import React from 'react';
// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { TrolleyContext } from '../../../context/trolley';
import './game.scss';

function Game({ id, images, title, price }) {
    const [landingPageImg, gameImg] = images;
    return (
        <div>
            <div className='all-games-container'>
                <div className="all-games-item">
                    <img src={gameImg} alt="item" className='all-games-item-img img' />
                    <div className='all-games-item-overlay overlay'>
                        <Link
                            to={`/games/${id}`}
                        >
                            <i className="fas fa-search all-games-item-overlay-icon icon"></i>
                        </Link>
                        {/* <i
                            className="fas fa-cart-plus all-games-item-overlay-icon icon"
                            onClick={() => {
                                increase(id)
                            }}
                        >
                        </i> */}
                    </div>
                </div>
            </div>
            <div className='all-games-item-detail detail'>
                <p>{title}</p>
                <p><span>£{price}</span></p>
            </div>
        </div>
    );
}

export default Game;
