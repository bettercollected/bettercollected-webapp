import React, { useEffect, useState } from 'react';

import Tooltip from '@mui/material/Tooltip';
import { info } from 'console';

import EmptyTray from '@app/assets/svgs/empty-tray.svg';
import { ShareIcon } from '@app/components/icons/share-icon';
import Image from '@app/components/ui/image';
import ActiveLink from '@app/components/ui/links/active-link';
import Loader from '@app/components/ui/loader';
import MuiSnackbar from '@app/components/ui/mui-snackbar';
import { useBreakpoint } from '@app/lib/hooks/use-breakpoint';
import { useCopyToClipboard } from '@app/lib/hooks/use-copy-to-clipboard';
import { StandardFormDto } from '@app/models/dtos/form';
import { usePatchPinnedFormMutation } from '@app/store/google/api';
import { useGetWorkspaceFormsQuery } from '@app/store/workspaces/api';
import { toEndDottedStr } from '@app/utils/stringUtils';

import { PinFillIcon } from '../icons/pin-fill';
import { PinOutlinedIcon } from '../icons/pin-outline';

interface IFormCard {
    workspaceId: string;
}

export default function FormCard({ workspaceId }: IFormCard) {
    const [isOpen, setIsOpen] = useState(false);
    const breakpoint = useBreakpoint();
    const [_, copyToClipboard] = useCopyToClipboard();
    const { isLoading, data, isError } = useGetWorkspaceFormsQuery(workspaceId, { pollingInterval: 30000 });
    const [patchPinnedForm] = usePatchPinnedFormMutation();

    const [pinnedForms, setPinnedForms] = useState<any>([]);
    const [unpinnedForms, setUnpinnedForms] = useState<any>([]);

    const [tempPinnedForms, setTempPinnedForms] = useState<any>([]);

    console.log('workspace form:', data);

    useEffect(() => {
        if (!!data) {
            const pinnedForms = data.payload.content.filter((form) => form.settings.pinned === true);
            const unpinnedForms = data.payload.content.filter((form) => form.settings.pinned === false);
            setPinnedForms(pinnedForms);
            setUnpinnedForms(unpinnedForms);
        }
    }, [data]);

    console.log('pinned', pinnedForms);
    console.log('unpinned', unpinnedForms);

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

    const handlePinnedForms = (formId: string) => {
        console.log('pinned forms:');

        const formObject = [
            {
                form_id: formId,
                pinned: true
            }
        ];
        //TODO: patch api for the pinned forms
        patchPinnedForm(formObject).then((data) => {
            console.log('patch response: ', data);
        });
    };

    const UnpinnedForms = () => (
        <div className="mb-10">
            <h1 className="italic text-gray-700 text-xl mb-4">Other Forms</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 gap-8">
                {unpinnedForms.length !== 0 &&
                    unpinnedForms.map((form: StandardFormDto) => {
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
                                    query: { slug }
                                }}
                            >
                                <div className="flex flex-row items-center justify-between h-full gap-8 p-5 border-[1px] border-neutral-300 hover:border-blue-500 drop-shadow-sm hover:drop-shadow-lg transition cursor-pointer bg-white rounded-[20px]">
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
                                            handlePinnedForms(form.formId);
                                            // copyToClipboard(shareUrl);
                                            // setIsOpen(true);
                                        }}
                                        className="flex flex-col h-full justify-between items-between border-white hover:border-neutral-100 rounded-md"
                                    >
                                        {/* <ShareIcon width={19} height={19} /> */}
                                        <PinOutlinedIcon width={40} height={40} clickButton={() => console.log('clicked')} />
                                    </div>
                                </div>
                            </ActiveLink>
                        );
                    })}
            </div>
        </div>
    );

    const PinnedForms = () => (
        <div className="mb-10">
            <h1 className="italic text-gray-700 text-xl mb-4">Pinned Forms</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 gap-8">
                {pinnedForms.length !== 0 &&
                    pinnedForms.map((form: StandardFormDto) => {
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
                                    query: { slug }
                                }}
                            >
                                <div className="flex flex-row items-center justify-between h-full gap-8 p-5 border-[1px] border-neutral-300 hover:border-blue-500 drop-shadow-sm hover:drop-shadow-lg transition cursor-pointer bg-white rounded-[20px]">
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
                                        className="flex flex-col h-full justify-between items-between border-white hover:border-neutral-100 rounded-md"
                                    >
                                        <Tooltip title="Click to unpin the form">
                                            <PinFillIcon width={19} height={19} />
                                        </Tooltip>
                                        {/* <PinOutlinedIcon width={19} height={19} /> */}

                                        {/* <div className="p-2 hover:border-[1px] rounded-md">
                                            <ShareIcon width={19} height={19} />
                                        </div> */}
                                    </div>
                                </div>
                            </ActiveLink>
                        );
                    })}
            </div>
        </div>
    );

    return (
        <div className="pt-3 md:pt-7">
            {forms.length === 0 && (
                <div className="w-full min-h-[30vh] flex flex-col items-center justify-center text-darkGrey">
                    <Image src={EmptyTray} width={40} height={40} alt="Empty Tray" />
                    <p className="mt-4 p-0">0 forms</p>
                </div>
            )}
            {pinnedForms.length !== 0 && <PinnedForms />}
            {unpinnedForms.length !== 0 && <UnpinnedForms />}

            <MuiSnackbar isOpen={isOpen} setIsOpen={setIsOpen} message="Copied URL" severity="info" />
        </div>
    );
}
