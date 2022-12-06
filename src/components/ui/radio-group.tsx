import React from 'react';

export const Radiogroup = (props: any) => {
    return (
        <div>
            <div className="flex flex-col">
                <label className="text-md font-medium text-gray-900">{props.title}</label>
                <div>
                    {props.option?.map((options: any) => {
                        return (
                            <div className="form-check" key={options.id}>
                                <input
                                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-300  transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    disabled
                                    id={options.id}
                                    checked={props.value == options?.value}
                                />
                                <label className="form-check-label inline-block text-gray-900" htmlFor={options.id}>
                                    {options?.value}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
