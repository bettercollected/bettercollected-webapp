import React from 'react';

export default function Tabs(props: any) {
    return (
        <>
            <li className="mr-2">
                <button onClick={props.onclick} className={`inline-block p-4 rounded-t-lg border-b-2 text-lg ${props.true ? 'border-b border-[#007AFF] text-[#007AFF]' : ''} border-transparent hover:text-[#007AFF]`}>
                    {props.title}
                </button>
            </li>
        </>
    );
}
