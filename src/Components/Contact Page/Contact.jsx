import React from 'react';

const Contact = () => {
    return (
        <div className='flex gap-2 justify-center items-center my-5'>
            <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered input-secondary w-full max-w-xs" />
                <button class="btn btn-active btn-neutral">Submit</button>
        </div>
    );
};

export default Contact;