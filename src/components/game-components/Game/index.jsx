import React from 'react';
import { Link } from 'react-router-dom';
import './game.scss';

function Game({ id, images, title, price }) {
    return (
        <div>
            <div className='all-games-container'>
                <div className="all-games-item">
                    <img src={images[1]} alt="item" className='all-games-item-img img' />
                    <div className='all-games-item-overlay overlay'>
                        <Link
                            to={`/games/${id}`}
                        >
                            <i className="fas fa-search all-games-item-overlay-icon icon"></i>
                        </Link>
                        <i
                            className="fas fa-cart-plus all-games-item-overlay-icon icon"
                        >
                        </i>
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
