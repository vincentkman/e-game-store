import React from 'react'
import './footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <p>Copyright &copy; Vincent K Man {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer