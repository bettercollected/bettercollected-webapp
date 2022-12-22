export interface IGetWorkspaceFormQuery {
    workspace_id: string;
    custom_url: string;
}

export interface IGetWorkspaceSubmissionQuery {
    workspace_id: string;
    submission_id: string;
}

export interface ISearchWorkspaceFormsQuery {
    workspace_id: string;
    query: string;
}

export interface IPinnedFOrmRequest {
    workspaceId: string;
    body: any;
}
