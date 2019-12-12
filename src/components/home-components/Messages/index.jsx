import React from 'react';
import './messages.scss';

const MessageItem = ({ icon, title, description }) => {
    return (
        <div className="messages-item">
            <i className={`fas messages-item-icon icon ${icon}`} />
            <h3 className='messages-item-title'>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Messages() {
    return (
        <div className="messages">
            <MessageItem icon='fa-truck'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quod?'
            />
            <MessageItem icon='fa-pound-sign'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quod?'
            />
            <MessageItem icon='fa-history'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quod?'
            />
        </div>
    )
}

export default Messages;
