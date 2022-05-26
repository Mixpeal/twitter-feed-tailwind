import React, { useState } from 'react';

export default function SearchBlock() {
    const [focused, setFocus] = useState(false);
    const onFocus = () => setFocus(true)
    const onBlur = () => setFocus(false)

    return (
        <div className={`flex space-x-3 items-center py-2 px-4 bg-bg-main rounded-full my-3 ${focused ? 'border border-primary-high' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.16666" cy="9.16669" r="7" stroke={focused ? "#1D9BF0" :"#5D6976"} />
                <path d="M14.1667 14.1667L17.9167 17.9167" stroke={focused ? "#1D9BF0" :"#5D6976"} stroke-linecap="round" />
            </svg>
            <input type="text" onFocus={onFocus} onBlur={onBlur} className="w-full placeholder:bg-bg-main bg-bg-main outline-none" placeholder="Search twitter" />
        </div>
    )
}
