import React from 'react';

export const Timepicker = () => {
    return (
        <div className="my-2 flex flex-col">
            <label className="text-md font-medium text-gray-900">Select Time</label>
            <div className=" mb-1 xl:w-96">
                <input type="time" placeholder="Select a date" className=" w-full px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 " />
            </div>
        </div>
    );
};
