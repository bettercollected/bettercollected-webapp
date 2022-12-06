import React from 'react';

const Formfield = (props: any) => {
    return (
        <div>
            <label htmlFor={props.type} className="block mb-2 text-md font-medium text-gray-900">
                {props.title}
            </label>
            <input type={props.type} value={props.value} disabled className="bg-gray-100 border mb-5 border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5" />
        </div>
    );
};

export default Formfield;
