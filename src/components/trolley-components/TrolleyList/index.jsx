import React, { useContext } from 'react';
import { TrolleyContext } from '../../../context/trolley';
import TrolleyItem from '../TrolleyItem';

function TrolleyList() {
    const { trolley } = useContext(TrolleyContext);
    {
        return trolley.length === 0 ?
            <h1 className='title'>
                Your Trolley is currently empty
            </h1> :
                <div>
                    {
                        trolley.map(item => (
                            <TrolleyItem
                                key={item.id}
                                {...item}
                            /> 
                        ))
                    }
                </div>
    }
}

export default TrolleyList;