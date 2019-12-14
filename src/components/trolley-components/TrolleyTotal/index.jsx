import React, { useContext } from 'react';
import { TrolleyContext } from '../../../context/trolley';
import './trolley-total.scss';

function TrolleyTotal() {
    const { total, clearTrolley } = useContext(TrolleyContext);
    return (
        <div className='trolley-total'>
            <button
                className='trolley-total-btn btn-default'
                onClick={clearTrolley}>
                Clear Trolley
            </button>
            <div className='trolley-total-section'>
                <h5>Total: £{total}</h5>
            </div>
        </div>
    )
}

export default TrolleyTotal; 
