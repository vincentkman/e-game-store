import React, { useContext } from 'react';
import { TrolleyContext } from '../../../context/trolley';
import './trolley-item.scss';

function TrolleyItem({ id, price, gameImg, title, count }) {
    const { total, remove, increase, decrease } = useContext(TrolleyContext);
    return (
        <div className='trolley-item'>
            <div className='trolley-item-img'>
                <img src={gameImg} alt="game" className='trolley-item-img-size' />
            </div>
            <div className='trolley-item-title'>
                <p>{title}</p>
            </div>
            <div className='trolley-item-price'>
                <p>£{price}</p>
            </div>

            <div className='trolley-item-qty'>
                <i
                    className="fas fa-arrow-alt-circle-down"
                    onClick={() => decrease(id, count)}
                ></i>
                <span>{count}</span>
                <i
                    className="fas fa-arrow-alt-circle-up"
                    onClick={() => increase(id)
                    }
                ></i>
            </div>
            <div className='trolley-item-remove'>
                <i
                    className="fas fa-trash"
                    onClick={() => remove(id)
                    }
                ></i>
            </div>
            <div className='trolley-item-total'>
                <p>£{total}</p>
            </div>
        </div>
    )
}

export default TrolleyItem;
