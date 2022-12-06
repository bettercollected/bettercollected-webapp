import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import environments from '@app/configs/environments';

console.log(environments.API_ENDPOINT_HOST);

export const FORM_API_REDUCER_KEY = 'formApi';

const FORM_TAG_TYPES = 'FORM';
export const formApi = createApi({
    reducerPath: FORM_API_REDUCER_KEY,
    tagTypes: [FORM_TAG_TYPES],
    baseQuery: fetchBaseQuery({
        baseUrl: environments.API_ENDPOINT_HOST
    }),
    endpoints: (builder) => ({
        getAllForms: builder.query<any, void>({
            query: () => `/form`
        }),
        getSingleForm: builder.query<any, any>({
            query: (formID) => `/form/${formID}`
        }),
        getFormResponse: builder.query<any, any>({
            query: (formID) => `/form/${formID}/responses`
        }),
        getFormResponsesResponse: builder.query<any, any>({
            query: ({ formID, responseID }) => `/form/${formID}/responses/${responseID}`
        })
    })
});

// export const {useGetAllFormsQuery,useGetSingleFormQuery,useGetFormResponseQuery} = formApi;
export const { useGetAllFormsQuery, useGetSingleFormQuery, useGetFormResponseQuery, useGetFormResponsesResponseQuery } = formApi;
