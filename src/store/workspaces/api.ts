import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import environments from '@app/configs/environments';
import { StandardFormDto } from '@app/models/dtos/form';
import { IGenericAPIResponse } from '@app/models/dtos/genericResponse';
import { WorkspaceDto } from '@app/models/dtos/workspaceDto';

export const WORKSPACES_REDUCER_PATH = 'workspacesApi';

const WORKSPACE_TAGS = 'WORKSPACE_TAG';
export const workspacesApi = createApi({
    reducerPath: WORKSPACES_REDUCER_PATH,
    tagTypes: [WORKSPACE_TAGS],
    baseQuery: fetchBaseQuery({
        baseUrl: environments.API_ENDPOINT_HOST,
        prepareHeaders(headers) {
            return headers;
        },
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        getWorkspace: builder.query<WorkspaceDto, { workspace_id: string }>({
            query: (body) => ({
                url: `/workspaces`,
                method: 'GET',
                params: { workspace_id: body.workspace_id }
            }),
            providesTags: [WORKSPACE_TAGS]
        }),
        getWorkspaceForms: builder.query<IGenericAPIResponse<Array<StandardFormDto>>, string>({
            query: (id) => ({
                url: `/workspaces/${id}/forms`,
                method: 'GET',
                params: { pinned: true }
            }),
            providesTags: [WORKSPACE_TAGS]
        })
    })
});

export const { useGetWorkspaceQuery, useGetWorkspaceFormsQuery } = workspacesApi;