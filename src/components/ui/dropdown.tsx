import React from 'react';

export const Dropdown = () => {
    return (
        <div className="my-2">
            <label htmlFor="dropdown" className="text-md font-medium text-gray-900">
                DropDown
            </label>
            <select id="dropdown" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 ">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    );
};
