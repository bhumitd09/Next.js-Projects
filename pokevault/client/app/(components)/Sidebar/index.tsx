'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from 'lucide-react';
import React from 'react';

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSideBarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${
        isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 
                ${isSideBarCollapsed ? "px-5" : "px-6"

                }`}
                >
                <div> logo </div>
                <h1 className={`${
                    isSideBarCollapsed ? "hidden" : "block "
                    } font-extrabold text-2xl`}
                    > 
                    PokéVault 
                    </h1>

                <button 
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" 
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    <Menu className='w-4 h-4' />  
                </button>
            </div>

            {/* LINKS */}
            <div className='flex-grow mt-8'>
                {/* links here */}
            </div>

            {/* Footer */}
            <div>
                <p className='text-center text-xs text-blue-500'>&copy; 2024 PokéVault</p>
            </div>
        </div>
    );
};

export default Sidebar;
