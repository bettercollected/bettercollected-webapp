import React, { useState } from 'react';

import FormResponses from '@app/components/FormResponses/FormResponses';
import { Checkbox } from '@app/components/ui/checkbox';
import { Datepicker } from '@app/components/ui/datepicker';
import { Dropdown } from '@app/components/ui/dropdown';
import { Filedrop } from '@app/components/ui/filedrop';
import FormResponseButton from '@app/components/ui/formResponseButton';
import FormResponseTab from '@app/components/ui/formResponseTab';
import { Radiogroup } from '@app/components/ui/radio-group';
import { Textarea } from '@app/components/ui/textarea';
import { Timepicker } from '@app/components/ui/timepicker';
import { useGetAllFormsQuery, useGetFormResponseQuery, useGetFormResponsesResponseQuery, useGetSingleFormQuery } from '@app/store/form/api';
import { useAppSelector } from '@app/store/hooks';

const Formquestions = () => {
    // const {data:allForms,isLoading,isError,isSuccess,error} = useGetAllFormsQuery();
    const selected = useAppSelector((state) => state.formResponseTab.selected);
    console.log(selected);
    const { data: singleForm } = useGetSingleFormQuery('asd');
    // const { data: formResponse } = useGetFormResponseQuery("asd");
    const { data: formResponses } = useGetFormResponsesResponseQuery({ formID: 'asd', responseID: 'asd' });
    // console.log("all forms");
    // console.log(allForms);
    // console.log("signle forms");
    // console.log(singleForm?.payload);
    const singleForms = singleForm?.payload?.content;
    // console.log("formresponse");
    // console.log(formResponses?.payload?.content);
    // console.log("responsesresponse");
    // console.log(responseResponses);
    const formResponse = formResponses?.payload?.content;
    return (
        <>
            <div className="w-full">
                <FormResponseTab select={selected} />

                {selected === 'Questions' && (
                    <div className="flex flex-col mx-10 px-5 my-5 justify-start">
                        <div className="flex flex-col py-5">
                            <h1 className="text-3xl font-bold">{singleForms?.title}</h1>
                            <p className="text-grey">{singleForms?.description}</p>
                        </div>
                        <FormResponses response={null} />
                    </div>
                )}
                {selected === 'Responses' && (
                    <div className="flex flex-col mx-10 px-5 my-5 justify-start">
                        <div className="flex flex-col py-5">
                            <h1 className="text-3xl font-bold">Responses</h1>
                            <p className="text-grey">see your responses here</p>
                        </div>
                        <FormResponses response={formResponse} />
                    </div>
                )}
                {selected == 'Settings' && <div className="flex flex-col mx-10 px-5 my-5 justify-start">settings here !!!</div>}
            </div>
        </>
    );
};

export default Formquestions;
