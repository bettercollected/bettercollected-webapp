import React from 'react';

import FormResponseButton from './formResponseButton';

const FormResponseTab = (props: any) => {
    return (
        <div className="inline-flex w-full justify-center my-10">
            <div className="inline-flex rounded-full shadow-sm" role="group">
                <FormResponseButton
                    name={'Questions'}
                    icon={
                        <svg aria-hidden="true" className="mr-2 w-6 h-6 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                        </svg>
                    }
                    class={`rounded-l-full ${props.select == 'Questions' ? 'bg-[#007AFF] text-white' : 'text-[#B0B0B0] bg-transparent'}`}
                    onclick={'Questions'}
                />
                <FormResponseButton
                    name={'Responses'}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mr-2 w-6 h-6  fill-current" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
                        </svg>
                    }
                    class={`border-t border-b ${props.select === 'Responses' ? 'bg-[#007AFF] text-white' : 'text-[#B0B0B0] bg-transparent'}`}
                    onclick={'Responses'}
                />
                <FormResponseButton
                    name={'Settings'}
                    icon={
                        <svg aria-hidden="true" className="mr-2 w-6 h-6  fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    }
                    class={`rounded-r-full ${props.select === 'Settings' ? 'bg-[#007AFF] text-white' : 'text-[#B0B0B0] bg-transparent'}`}
                    onclick={'Settings'}
                />
            </div>
        </div>
    );
};

export default FormResponseTab;
