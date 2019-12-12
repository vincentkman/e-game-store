import React from 'react';
import './form.scss';

function Form() {
    return (
        <div className='contact'>
            <h3 className='title'>Contact Us</h3>
            <div className='contact-search-input'>
                <form action="https://formspree.io/vincentkman@yahoo.com" method="POST">
                    <div>
                        <label for="full-name">Full Name</label>
                        <input
                            type='text'
                            name='full-name'
                            placeholder='Required'
                            className='contact-search-input-box'
                            required
                        />
                    </div>
                    <div>
                        <label for="email">Email Address</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Required'
                            className='contact-search-input-box'
                            required
                        />
                    </div>
                    <div>
                        <label for="subject">Subject</label>
                        <input
                            type='text'
                            name='subject'
                            placeholder='Required'
                            className='contact-search-input-box'
                            required
                        />
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea
                            name='message'
                            placeholder='Your message goes here'
                            rows='10'
                            className='contact-search-input-box contact-search-input-message'
                        />
                    </div>
                    <button type="submit" className='contact-search-input-btn btn-default'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;