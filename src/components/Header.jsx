import React, { useEffect } from 'react'
import { useState } from 'react';

const Header = () => {

    const getHeadingNumber = () => {
        return (rangeValue / 25) + 1;
    }

    const [rangeValue, setRangeValue] = useState(0);
    const [text, setText] = useState('My heading');
    const [code, setCode] = useState('#');
    const headingNumber = getHeadingNumber();

    const handleRangeChange = e => setRangeValue(e.target.value);
    const handleTextChange = e => setText(e.target.value);
    const copyStateToClipboard = (state) => navigator.clipboard.writeText(state);

    const getCode = () => {
        return `${"#".repeat(headingNumber)} ${text}`;
    }

    useEffect(() => {
        setCode(getCode());
    }, [rangeValue, text])

    return (
        <div className='max-w-[800px] m-auto md:p-20 p-6 my-16'>
            <h2 className='text-2xl'>Headings</h2>

            <div className='grid sm:grid-cols-2 gap-x-8 items-center py-4'>
                <div className='w-full'>
                    <input type="range" min={0} max="125" value={rangeValue} className="range" step="25" onChange={handleRangeChange} />
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>H1</span>
                        <span>H2</span>
                        <span>H3</span>
                        <span>H4</span>
                        <span>H5</span>
                        <span>H6</span>
                    </div>
                </div>

                <div className='w-full'>
                    <input type="text" placeholder="Text of heading" className="input input-bordered input-primary w-full my-6 sm:my-0" value={text} onChange={handleTextChange} autoFocus />
                </div>
            </div>

            <div className="relative z-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 my-4">
                <div className="relative flex text-slate-400 text-xs leading-6">
                    <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Generated Markdown</div>
                    <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                        <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                    </div>
                    <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                        <div className="relative flex -mr-2">
                            <button type="button" onClick={() => { copyStateToClipboard(code) }} className="text-slate-500 hover:text-slate-400">
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="w-8 h-8">
                                    <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                                    <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                        <code className="flex-none min-w-full p-5">
                            <span className="flex">
                                <span className="flex-auto">{code}</span>
                            </span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default Header