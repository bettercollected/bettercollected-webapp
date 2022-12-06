import React from 'react';

import { type } from 'os';

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

import Formfield from '../ui/formfield';

const FormResponses = (props: any) => {
    // const {data:allForms,isLoading,isError,isSuccess,error} = useGetAllFormsQuery();
    const { data: singleForm, isSuccess } = useGetSingleFormQuery('asd');
    // const { data: formResponse } = useGetFormResponseQuery("asd");
    const { data: formResponses } = useGetFormResponsesResponseQuery({ formID: 'asd', responseID: 'asd' });
    // console.log("all forms");
    // console.log(allForms);
    console.log('signle forms');
    const singleForms = singleForm?.payload?.content;
    console.log(singleForms);
    console.log('formresponse');
    const formResponse = formResponses?.payload?.content;
    console.log(formResponse);
    // console.log("responsesresponse");
    // console.log(responseResponses);
    const typeChecker = (questions: any, responses: any) => {
        switch (questions.type) {
            case 'text':
                return <Formfield key={questions.id} title={questions.title} type={questions.type} value={responses ? responses.answer : ''} />;
            case 'choice':
                return <Radiogroup key={questions.id} title={questions.title} option={questions.options} value={responses ? responses.answer : ''} />;
            case 'email':
                return <Formfield key={questions.id} title={questions.title} type={questions.type} value={responses ? responses.answer : ''} />;
        }
    };

    const ErrorView = () => <div className="flex">Error occured. Please refresh!</div>;

    return <div>{singleForms?.questions?.map((questions: any) => (props.response ? props.response.responses?.map((responses: any) => (questions.id == responses.questionId ? typeChecker(questions, responses) : null)) : typeChecker(questions, null)))}</div>;
};

export default FormResponses;
