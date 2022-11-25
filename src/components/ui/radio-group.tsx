import React from 'react';

export const Radiogroup = () => {
    return (
        <div>
            <div className="flex flex-col">
                <label className="text-md font-medium text-gray-900">Radio buttton</label>
                <div>
                    <div className="form-check">
                        <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-300  transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-label inline-block text-gray-900" htmlFor="flexRadioDefault1">
                            Default radio 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-300  transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                        />
                        <label className="form-check-label inline-block text-gray-900" htmlFor="flexRadioDefault2">
                            Default checked radio 2
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
