import React, { useMemo, useRef, useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cn from 'classnames';

import { Header } from '@app/layouts/_layout';
import { useBreakpoint } from '@app/lib/hooks/use-breakpoint';
import { authApi } from '@app/store/auth/api';
import { useAppSelector } from '@app/store/hooks';

import { useDrawer } from '../drawer-views/context';
import { ChevronDown } from '../icons/chevron-down';
import { Logout } from '../icons/logout-icon';
import { useModal } from '../modal-views/context';
import Hamburger from '../ui/hamburger';
import Logo from '../ui/logo';
import SidebarExpandable from './_expandable';

export default function Layout(props: any) {
    const children = props.children;
    const isNavbarRequired = props.children;
    const { openModal } = useModal();
    const { openDrawer, isOpen } = useDrawer();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const screenSize = useBreakpoint();

    const statusQuerySelect = useMemo(() => authApi.endpoints.getStatus.select('status'), []);
    const selectGetStatus = useAppSelector(statusQuerySelect);

    const handleOpenSidebar = () => {
        openDrawer('DASHBOARD_SIDEBAR');
    };

    const checkIfSideBarRender = () => {
        switch (screenSize) {
            case 'xs':
                return false;
            case 'sm':
                return false;
            case 'md':
                return false;
            case 'lg':
                return false;
            case 'xl':
                return true;
            case '2xl':
                return true;
            case '3xl':
                return true;
            case '4xl':
                return true;
        }
    };

    const profileName = selectGetStatus?.data?.payload?.content?.user?.sub ?? '';

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event: any) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className="ltr:xl:pl-24 rtl:xl:pr-24 ltr:2xl:pl-28 rtl:2xl:pr-28">
            {isNavbarRequired && (
                <Header>
                    <>
                        <div className="flex flex-row w-full h-full py-2 md:py-0 justify-between items-center">
                            <div className={'flex'}>
                                {!checkIfSideBarRender() && <Hamburger isOpen={isOpen} className="!shadow-none !bg-white !text-black !flex !justify-start" onClick={handleOpenSidebar} />}
                                <Logo />
                            </div>
                            <div aria-label="more" id="profile-button" aria-expanded={open ? 'true' : undefined} aria-haspopup="true" aria-controls={open ? 'profile-menu' : undefined} onClick={handleClick}>
                                <div className="flex cursor-pointer items-center mt-2">
                                    <div className="flex rounded-md w-full p-3 h-10 items-center justify-center mr-2 bg-blue-50">{profileName[0]?.toUpperCase()}</div>
                                    <div className="italic font-bold text-md text-gray-600 flex flex-row items-center">
                                        <p className="mr-2">{profileName}</p>
                                        {/* <ChevronDown className="w-[10px] h-[10px]" /> */}
                                    </div>
                                </div>
                            </div>
                            {/* <Menu
                                id="profile-menu"
                                MenuListProps={{ 'aria-labelledby': 'profile-button' }}
                                anchorEl={anchorEl}
                                open={open}
                                PaperProps={{
                                    style: {
                                        maxHeight: '20ch',
                                        width: '20ch'
                                    }
                                }}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    key="logout"
                                    onClick={() => {
                                        setAnchorEl(null);
                                        openModal('LOGOUT_VIEW');
                                    }}
                                >
                                    <div className="flex flex-row text-red-500">
                                        <Logout className={'!w-5 !h-5 mr-2 '} />
                                        <p>Logout</p>
                                    </div>
                                </MenuItem>
                            </Menu> */}
                        </div>
                    </>
                </Header>
            )}
            {checkIfSideBarRender() && <SidebarExpandable />}
            <main className={cn('px-4 xl:left-24 right-0 w-full xl:w-auto absolute top-24 pt-4 sm:px-6 lg:px-8 3xl:px-10 3xl:pt-2.5')}>{children}</main>
        </div>
    );
}
