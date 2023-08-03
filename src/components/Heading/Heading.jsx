import React, {useState, useEffect} from 'react'
import Range from './Range';
import Text from './Text';
import Code from './Code';

const Header = () => {
    const getHeadingNumber = () => {
        return (range / 25) + 1;
    }

    const getCode = () => {
        return `${"#".repeat(headingNumber)} ${text}`;
    }
    
    const [text, setText] = useState('My heading');
    const [range, setRange] = useState(0);
    const headingNumber = getHeadingNumber();
    const code = getCode();
    
    return (
        <div className='max-w-[800px] m-auto md:p-12 p-6 my-4'>
            <h2 className='text-2xl'>Heading</h2>
            <div className='grid sm:grid-cols-2 gap-x-8 items-center py-4'>
                <Range  range={range} setRange={setRange}/>
                <Text text={text} setText={setText}/>
            </div>
            <Code code={code}/>
        </div>
    )
}

export default Header