import React from 'react';

export const Textarea = () => {
    return (
        <div className="my-2">
            <label className="text-md font-medium text-gray-900">Text Area</label>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
    );
};
