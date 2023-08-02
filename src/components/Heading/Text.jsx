import React, { useState } from 'react'

const Text = ({text, setText}) => {
    const handleTextChange = e => setText(e.target.value);
    
    return (
        <div className='w-full'>
            <input type="text" placeholder="Text of heading" className="input input-bordered input-primary w-full my-6 sm:my-0" value={text} onChange={handleTextChange} autoFocus />
        </div>
    )
}

export default Text