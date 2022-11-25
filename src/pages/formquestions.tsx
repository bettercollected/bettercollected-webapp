import React from 'react';

import { Checkbox } from '@app/components/ui/checkbox';
import { Datepicker } from '@app/components/ui/datepicker';
import { Dropdown } from '@app/components/ui/dropdown';
import { Filedrop } from '@app/components/ui/filedrop';
import { Radiogroup } from '@app/components/ui/radio-group';
import { Textarea } from '@app/components/ui/textarea';
import { Timepicker } from '@app/components/ui/timepicker';

const formquestions = () => {
    return (
        <>
            <div className="inline-flex w-full justify-center my-10">
                <div className="inline-flex rounded-full shadow-sm" role="group">
                    <button type="button" className="inline-flex flex-col items-center py-3 px-6 text-md font-medium text-[#007AFF] bg-transparent rounded-l-lg border border-[#B0B0B0] hover:bg-[#007AFF] hover:text-white">
                        <svg aria-hidden="true" className="mr-2 w-6 h-6 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                        </svg>
                        Questions
                    </button>
                    <button type="button" className="inline-flex flex-col items-center py-3 px-6 text-md font-medium text-[#B0B0B0] bg-transparent border-t border-b border-[#B0B0B0] hover:bg-[#007AFF] hover:text-white">
                        {/* <svg aria-hidden="true" className="mr-2 w-6 h-6  fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mr-2 w-6 h-6  fill-current" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
                        </svg>
                        Responses
                    </button>
                    <button onClick={() => {}} type="button" className="inline-flex flex-col items-center py-3 px-6 text-md font-medium text-[#B0B0B0] bg-transparent rounded-r-md border border-[#B0B0B0] hover:bg-[#007AFF] hover:text-white">
                        <svg aria-hidden="true" className="mr-2 w-6 h-6  fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        Settings
                    </button>
                </div>
            </div>
            <div className="flex w-1/3 flex-col mx-10 px-5 my-5 justify-start">
                <div className="flex flex-col py-5">
                    <h1 className="text-3xl font-bold">Sample Form</h1>
                    <p className="text-grey">This is the brief description of the form</p>
                </div>
                <Checkbox />
                <Dropdown />
                <Textarea />
                <Filedrop />
                <Datepicker />
                <Timepicker />
                <Radiogroup />
            </div>
        </>
    );
};

export default formquestions;
