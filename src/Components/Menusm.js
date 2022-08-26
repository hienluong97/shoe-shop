import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Menusm() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div className="relative min-h-screen">
            <main className="w-full min-h-screen">
                {/* box content */}
                <div className="flex h-screen bg-gray-200">
                    {/* nav side bar */}
                    <>
                        {/* Sidebar Overlay */}
                        <div
                            onClick={() => setIsSidebarOpen(false)}
                            className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
                                isSidebarOpen ? 'block' : 'hidden'
                            }`}
                        />

                        <div>
                            <button
                                className="btn-menu"
                                onClick={() => setIsSidebarOpen(true)}
                                type="button"
                            >
                                {/* <Icon name="burger" className="w-6 h-6" /> */}
                                <FontAwesomeIcon
                                    className="text-xs leading-[3.5rem]"
                                    icon="fa-solid fa-bars"
                                />
                            </button>
                        </div>

                        {/* Sidebar */}
                        <div
                            className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                                isSidebarOpen
                                    ? 'ease-out translate-x-0'
                                    : 'ease-in -translate-x-full'
                            }`}
                        >
                            <div className="flex items-center justify-center mt-10 text-center py-6">
                                <span className="mx-2 text-2xl font-semibold text-black">
                                    react-minimal-side-navigation
                                </span>
                            </div>
                            <div className="flex-1 text-center sm:hidden md:hidden lg:hidden">
                                <NavLink
                                    className=" leading-[3.5rem] text-xs font-light m-2"
                                    to="/"
                                >
                                    Trang chủ
                                </NavLink>
                                <NavLink
                                    className="leading-[3.5rem] text-xs font-light m-2"
                                    to="/products"
                                >
                                    Sản phẩm
                                </NavLink>
                                <NavLink
                                    className="leading-[3.5rem] text-xs font-light m-2"
                                    to="/about"
                                >
                                    Liên hệ
                                </NavLink>
                            </div>
                        </div>
                    </>
                </div>
            </main>
        </div>
    );
}

export default Menusm;
