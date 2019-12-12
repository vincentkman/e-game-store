import React from 'react';
import './loading.scss';

function Loading() {
    return (
        <div className='loading'>
            <div className='loading-img'></div>
            <h1 className='loading-message'>Please wait</h1>
        </div>
    )
}

export default Loading;
