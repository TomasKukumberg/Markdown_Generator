import React from 'react'
import { useState } from 'react';

const Range = ({range, setRange}) => {
    const handleRangeChange = e => setRange(e.target.value);
    
    return (
        <div className='w-full'>
            <input type="range" min={0} max="125" value={range} className="range" step="25" onChange={handleRangeChange} />
            <div className="w-full flex justify-between text-xs px-2">
                <span>H1</span>
                <span>H2</span>
                <span>H3</span>
                <span>H4</span>
                <span>H5</span>
                <span>H6</span>
            </div>
        </div>
    )
}

export default Range