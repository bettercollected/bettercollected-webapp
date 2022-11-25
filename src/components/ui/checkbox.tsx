import React from 'react';

export const Checkbox = () => {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-md font-medium text-gray-900">Checkboxes</label>
            <div>
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">
                    answer 1
                </label>
            </div>
        </div>
    );
};
