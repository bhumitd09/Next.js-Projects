'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from "@/state";
import { Archive, LucideIcon, Menu, User, BadgePoundSterling, ShoppingBasket, Cog, Gauge } from 'lucide-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href, 
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href}>
            <div
                className={`cursor-pointer flex items-center ${
                    isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
                } hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 transition-colors ${
                    isActive ? "bg-blue-200 text-white dark:bg-blue-900" : "text-gray-900 dark:text-gray-300"
                }`}
            >
                <Icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                <span
                    className={`${
                        isCollapsed ? "hidden" : "block"
                    } font-medium text-gray-900 dark:text-gray-300`}
                >
                    {label}
                </span>
            </div>
        </Link>
    );
};

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
    } bg-gray-100 dark:bg-blue-900 transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div
                className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
                    isSideBarCollapsed ? "px-5" : "px-6"
                }`}
            >
                <div className="text-gray-900 dark:text-gray-100">logo</div>
                <h1
                    className={`${
                        isSideBarCollapsed ? "hidden" : "block"
                    } font-extrabold text-2xl text-gray-900 dark:text-gray-100`}
                >
                    PokéVault
                </h1>
                <button
                    className="md:hidden px-3 py-3 bg-gray-200 rounded-full hover:bg-pink-200 dark:bg-gray-700 dark:hover:bg-pink-500"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    <Menu className="w-4 h-4 text-gray-900 dark:text-gray-100" />
                </button>
            </div>

            {/* LINKS */}
            <div className="flex-grow mt-8">
                <SidebarLink href="/dashboard" icon={Gauge} label="Dashboard" isCollapsed={isSideBarCollapsed} />
                <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSideBarCollapsed} />
                <SidebarLink href="/products" icon={ShoppingBasket} label="Products" isCollapsed={isSideBarCollapsed} />
                <SidebarLink href="/users" icon={User} label="Users" isCollapsed={isSideBarCollapsed} />
                <SidebarLink href="/settings" icon={Cog} label="Settings" isCollapsed={isSideBarCollapsed} />
                <SidebarLink href="/expenses" icon={BadgePoundSterling} label="Expenses" isCollapsed={isSideBarCollapsed} />
            </div>

            {/* Footer */}
            <div className={`${isSideBarCollapsed ? "hidden" : "block"} md-10`}>
                <p className="text-center text-xs text-pink-400 dark:text-white-500">
                    &copy; 2024 PokéVault | Site By OneDev
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
