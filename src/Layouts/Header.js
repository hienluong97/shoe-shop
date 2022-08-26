import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import AccountInfo from '~/Components/AccountInfo';

function Header() {
    const cartProducts = useSelector((state) => state.cart);
    const totalItems = cartProducts.reduce((total, product) => {
        return total + product.quantity;
    }, 0);

    const userData = useSelector((state) => state.user);
    const { current, isLogin } = userData;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="w-full h-15 bg-white shadow-sm shadow-gray-200 fixed top-0 z-20">
            <div className="container px-4 lg:px-14 mx-auto">
                <div className=" hidden lg:flex">
                    <div className="flex-none">
                        <p className="leading-[3.5rem] text-2xl text-amber-300 font-bold text-shadow-xl shadow-yellow-300 ">
                            MStore
                        </p>
                    </div>
                    <div className="flex-1 text-center">
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
                    <div className="flex-none">
                        {isLogin ? (
                            <div
                                to="/login"
                                className="inline py-6 text-xs font-light leading-[3.5rem] m-2 group relative"
                            >
                                Hi{' '}
                                <span className="font-medium">
                                    {current.name}
                                </span>
                                <div className="absolute z-10 w-full right-0 left-0 bg-white invisible group-hover:visible shadow-md">
                                    <AccountInfo />
                                </div>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="text-xs font-light leading-[3.5rem] m-2 hover:cursor-pointer"
                            >
                                {/* Đăng nhập */}

                                <FontAwesomeIcon icon="fa-solid fa-user" />
                            </Link>
                        )}

                        <p className="inline text-xs leading-[3.5rem] m-2">
                            <FontAwesomeIcon
                                className="text-xs leading-[3.5rem]"
                                icon="fa-solid fa-magnifying-glass"
                            />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-xs py-1 pl-1 w-2 focus:w-fit font-light placeholder:pl-1 placeholder:text-2xs outline-none"
                            />
                        </p>

                        <Link to="/cart">
                            <p className="relative inline">
                                <FontAwesomeIcon
                                    className="text-xs leading-[3.5rem]"
                                    icon="fa-solid fa-cart-plus"
                                />
                                <span className="absolute px-1 text-3xs font-medium text-white bg-red-600 -top-1 -right-1.5 rounded-full">
                                    {totalItems}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-between lg:hidden">
                    <div
                        className="w-1/3 leading-[3.5rem]"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <FontAwesomeIcon
                            className="text-xs leading-[3.5rem]"
                            icon="fa-solid fa-bars"
                        />
                    </div>

                    <div className="w-1/3 text-center">
                        <p className="leading-[3.5rem] text-xl text-amber-300 font-bold text-shadow-xl shadow-yellow-300 ">
                            MStore
                        </p>
                    </div>

                    <div className="w-1/3 text-right">
                        <p className="inline text-xs leading-[3.5rem] m-2">
                            <FontAwesomeIcon
                                className="text-xs leading-[3.5rem]"
                                icon="fa-solid fa-magnifying-glass"
                            />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-xs py-1 pl-1 w-2 focus:w-fit font-light placeholder:pl-1 placeholder:text-2xs outline-none"
                            />
                        </p>

                        <Link to="/cart">
                            <p className="relative inline">
                                <FontAwesomeIcon
                                    className="text-xs leading-[3.5rem]"
                                    icon="fa-solid fa-cart-plus"
                                />
                                <span className="absolute px-1 text-3xs font-medium text-white bg-red-600 -top-1 -right-1.5 rounded-full">
                                    {totalItems}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>

                <div
                    className={`relative min-h-screen ${
                        isSidebarOpen ? 'block' : 'hidden'
                    }`}
                >
                    {/* box */}
                    <div className="flex">
                        {/* Sidebar Overlay */}
                        <div
                            onClick={() => setIsSidebarOpen(false)}
                            className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 ${
                                isSidebarOpen ? 'block' : 'hidden'
                            }`}
                        />
                        {/* Sidebar */}
                        <div
                            className={`fixed inset-y-0 left-0 z-30 w-1/2 sm:w-1/3 overflow-y-auto transition duration-1000 ease-out transform translate-x-0 bg-white border-r-2 ${
                                isSidebarOpen
                                    ? 'ease-out translate-x-0'
                                    : 'ease-in -translate-x-full'
                            }`}
                        >
                            <div className="flex items-center justify-center text-center pt-6">
                                <span className="mx-2 text-xl font-semibold text-black">
                                    MStore
                                </span>
                            </div>
                            <div className="flex flex-col text-center ">
                                <NavLink
                                    className=" text-xs font-light m-2"
                                    to="/"
                                >
                                    Trang chủ
                                </NavLink>
                                <NavLink
                                    className="text-xs font-light m-2"
                                    to="/products"
                                >
                                    Sản phẩm
                                </NavLink>
                                <NavLink
                                    className="text-xs font-light m-2"
                                    to="/about"
                                >
                                    Liên hệ
                                </NavLink>
                                {isLogin ? (
                                    <div
                                        to="/login"
                                        className="inline text-xs font-light leading-[3.5rem] mt-2 group relative"
                                    >
                                        <span className="font-medium">
                                            {current.name}
                                        </span>
                                        <AccountInfo />
                                    </div>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="text-xs font-light leading-[3.5rem] m-2 hover:cursor-pointer"
                                    >
                                        Đăng nhập
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
