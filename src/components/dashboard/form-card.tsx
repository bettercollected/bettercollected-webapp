import React, { useEffect, useMemo, useState } from 'react';

import { debounce, escapeRegExp } from 'lodash';

import styled from '@emotion/styled';
import { IconButton, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import EmptyTray from '@app/assets/svgs/empty-tray.svg';
import { SearchIcon } from '@app/components/icons/search';
import { ShareIcon } from '@app/components/icons/share-icon';
import Image from '@app/components/ui/image';
import ActiveLink from '@app/components/ui/links/active-link';
import Loader from '@app/components/ui/loader';
import MuiSnackbar from '@app/components/ui/mui-snackbar';
import { useBreakpoint } from '@app/lib/hooks/use-breakpoint';
import { useCopyToClipboard } from '@app/lib/hooks/use-copy-to-clipboard';
import { StandardFormDto } from '@app/models/dtos/form';
import { useGetWorkspaceFormsQuery, useSearchWorkspaceFormsMutation } from '@app/store/workspaces/api';
import { toEndDottedStr } from '@app/utils/stringUtils';

import FormsCard from '../cards/form-card';
import FormsContainer from '../cards/form-container';

interface IFormCard {
    workspaceId: string;
}

const StyledTextField = styled.div`
    .MuiFormControl-root {
        background: white;
        border-radius: 14px;
        outline: none;
    }

    .MuiOutlinedInput-notchedOutline {
        border-radius: 14px;
        border-width: 0.5px;
    }

    @media screen and (max-width: 640px) {
        .MuiFormControl-root {
            width: 100%;
        }
    }
`;

export default function FormCard({ workspaceId }: IFormCard) {
    const [isOpen, setIsOpen] = useState(false);
    const breakpoint = useBreakpoint();
    const [_, copyToClipboard] = useCopyToClipboard();
    const query = {
        workspace_id: workspaceId
    };
    const { isLoading, data, isError } = useGetWorkspaceFormsQuery(query, { pollingInterval: 30000 });
    const [searchWorkspaceForms] = useSearchWorkspaceFormsMutation();

    const [pinnedForms, setPinnedForms] = useState<any>([]);
    const [unpinnedForms, setUnpinnedForms] = useState<any>([]);
    const [showUnpinnedForms, setShowUnpinnedForms] = useState(false);

    useEffect(() => {
        if (!!data) {
            const pinnedForms = data.payload.content.filter((form) => form.settings.pinned);
            const unpinnedForms = data.payload.content.filter((form) => !form.settings.pinned);
            setPinnedForms(pinnedForms);
            setUnpinnedForms(unpinnedForms);
            setShowUnpinnedForms(unpinnedForms.length > 0);
        }
    }, [data]);

    const handleSearch = async (event: any) => {
        const response: any = await searchWorkspaceForms({
            workspace_id: workspaceId,
            query: escapeRegExp(event.target.value)
        });
        if (event.target.value) {
            setUnpinnedForms(response?.data?.payload?.content);
        } else {
            setUnpinnedForms(response?.data?.payload?.content.filter((form: any) => !form.settings.pinned) || []);
        }
    };

    const debouncedResults = useMemo(() => {
        return debounce(handleSearch, 500);
    }, []);

    useEffect(() => {
        debouncedResults.cancel();
    }, []);

    if (isLoading)
        return (
            <div className="w-full min-h-[30vh] flex flex-col items-center justify-center text-darkGrey">
                <Loader />
            </div>
        );

    if ((data?.payload?.content && Array.isArray(data?.payload?.content) && data?.payload?.content?.length === 0) || isError)
        return (
            <div className="w-full min-h-[30vh] flex flex-col items-center justify-center text-darkGrey">
                <Image src={EmptyTray} width={40} height={40} alt="Empty Tray" />
                <p className="mt-4 p-0">0 forms</p>
            </div>
        );

    const forms: Array<StandardFormDto> = data?.payload?.content ?? [];

    const FormsCardRenderer = ({ title, formsArray }: any) => {
        if (formsArray.length === 0) return <></>;
        return (
            <div className="mb-6">
                {!!title && <h1 className=" text-gray-700 font-semibold text-md md:text-lg mb-4">{title}</h1>}
                <FormsContainer>
                    {formsArray.map((form: StandardFormDto) => {
                        const slug = form.settings.customUrl;
                        let shareUrl = '';
                        if (window && typeof window !== 'undefined') {
                            shareUrl = `${window.location.origin}/forms/${slug}`;
                        }
                        return (
                            <ActiveLink
                                key={form.formId}
                                href={{
                                    pathname: `/forms/[slug]`,
                                    query: { slug, back: true }
                                }}
                            >
                                <FormsCard>
                                    <div className="flex flex-col justify-start h-full">
                                        <p className="text-xl text-grey mb-4 p-0">{['xs', 'sm'].indexOf(breakpoint) !== -1 ? toEndDottedStr(form.title, 15) : toEndDottedStr(form.title, 30)}</p>
                                        {form?.description && (
                                            <p className="text-base text-softBlue m-0 p-0 w-full">
                                                {['xs', 'sm'].indexOf(breakpoint) !== -1 ? toEndDottedStr(form.description, 45) : ['md'].indexOf(breakpoint) !== -1 ? toEndDottedStr(form.description, 80) : toEndDottedStr(form.description, 140)}
                                            </p>
                                        )}

                                        {!form?.description && <p className="text-base text-softBlue m-0 p-0 w-full italic">Form description not available.</p>}
                                    </div>

                                    <div
                                        aria-hidden
                                        onClick={(event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            copyToClipboard(shareUrl);
                                            setIsOpen(true);
                                        }}
                                        className="p-2 border-[1px] border-white hover:border-neutral-100 hover:shadow rounded-md"
                                    >
                                        <ShareIcon width={19} height={19} />
                                    </div>
                                </FormsCard>
                            </ActiveLink>
                        );
                    })}
                </FormsContainer>
            </div>
        );
    };

    return (
        <>
            {forms.length === 0 && (
                <div className="w-full min-h-[30vh] flex flex-col items-center justify-center text-darkGrey">
                    <Image src={EmptyTray} width={40} height={40} alt="Empty Tray" />
                    <p className="mt-4 p-0">0 forms</p>
                </div>
            )}
            {pinnedForms.length !== 0 && <FormsCardRenderer title="Pinned Forms" formsArray={pinnedForms} />}
            {showUnpinnedForms && (
                <>
                    {pinnedForms.length !== 0 && <hr className="mb-6" />}
                    {pinnedForms.length !== 0 && <h1 className=" text-gray-700 font-semibold text-md md:text-lg mb-4">All Forms</h1>}
                    <div className={`w-full md:w-[30%] ${!pinnedForms ? 'mt-6' : 'mt-0'} mb-6`}>
                        <StyledTextField>
                            <TextField
                                size="small"
                                name="search-input"
                                placeholder="Search forms..."
                                onChange={debouncedResults}
                                className={'w-full'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </StyledTextField>
                    </div>
                </>
            )}
            {unpinnedForms.length !== 0 && <FormsCardRenderer formsArray={unpinnedForms} />}

            <MuiSnackbar isOpen={isOpen} setIsOpen={setIsOpen} message="Copied URL" severity="info" />
        </>
    );
}
