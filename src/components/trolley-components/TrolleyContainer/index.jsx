import React from 'react';
import TrolleyColumns from '../TrolleyColumns';
import TrolleyList from '../TrolleyList';
import TrolleyTotal from '../TrolleyTotal';

function TrolleyBasket() {
    return (
        <div className='trolley-container'>
            <h3 className='title'>Your Shopping Basket</h3>
            <TrolleyColumns/>
            <TrolleyList/>
            <TrolleyTotal/>
        </div>
    )
}

export default TrolleyBasket;