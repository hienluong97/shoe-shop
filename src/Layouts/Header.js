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

    const userData = useSelector(state => state.user);
    const { current, isLogin } = userData;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="w-full h-16 lg:h-20 bg-white shadow-sm shadow-gray-200 fixed top-0 z-20">
            <div className="container px-4 lg:px-8 mx-auto">
                <div className="hidden lg:flex">
                    <div >
                        <Link to="/" className="leading-[5rem] text-4xl text-amber-300 font-bold text-shadow-xl shadow-yellow-400 ">
                            MStore
                        </Link>
                    </div>
                    <div className="flex-1 text-center space-x-6">
                        <NavLink
                            className=" leading-[5rem] text-base font-semibold pb-1"
                            to="/"
                        >
                            TRANG CHỦ
                        </NavLink>
                        <NavLink
                            className="leading-[5rem] text-base font-semibold pb-1"
                            to="/products"
                        >
                            SẢN PHẨM
                        </NavLink>
                        <NavLink
                            className="leading-[5rem] text-base font-semibold pb-1"
                            to="/contact"
                        >
                            LIÊN HỆ
                        </NavLink>
                    </div>
                    <div >
                        {isLogin ? (
                            <div className="inline py-8 text-base font-light leading-[5rem] m-2 group relative">
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
                                className="text-base font-semibold leading-[5rem] m-2 hover:cursor-pointer"
                            >
                                {/* Đăng nhập */}

                                <FontAwesomeIcon icon="fa-solid fa-user" />
                            </Link>
                        )}

                        <p className="inline text-base leading-[5rem] m-2">
                            <FontAwesomeIcon
                                className="text-base leading-[5rem]"
                                icon="fa-solid fa-magnifying-glass"
                            />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-base py-1 pl-1 w-2 focus:w-fit font-light placeholder:pl-1 placeholder:text-2xs outline-none"
                            />
                        </p>

                        <Link to="/cart">
                            <p className="relative inline">
                                <FontAwesomeIcon
                                    className="text-base leading-[5rem]"
                                    icon="fa-solid fa-cart-plus"
                                />
                                <span className="absolute px-1 text-2xs font-medium text-white bg-red-600 -top-3 -right-1.5 rounded-full">
                                    {totalItems}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>
 {/* small device header */}
                <div className="flex justify-between lg:hidden">
                    <div
                        className="w-1/3 leading-[4rem]"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <FontAwesomeIcon
                            className="text-base leading-[4rem]"
                            icon="fa-solid fa-bars"
                        />
                    </div>

                    <div className="w-1/3 text-center">
                        <Link to='/'className="leading-[4rem] text-2xl text-amber-400 font-bold text-shadow-md shadow-yellow-200 ">
                            MStore
                        </Link>
                    </div>

                    <div className="w-1/3 text-right">
                        <p className="inline text-base leading-[4rem] m-2">
                            <FontAwesomeIcon
                                className="text-base leading-[4rem]"
                                icon="fa-solid fa-magnifying-glass"
                            />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-base py-1 pl-1 w-2 font-light placeholder:pl-1 placeholder:text-2xs outline-none"
                            />
                        </p>

                        <Link to="/cart">
                            <p className="relative inline">
                                <FontAwesomeIcon
                                    className="text-base leading-[4rem]"
                                    icon="fa-solid fa-cart-plus"
                                />
                                <span className="absolute px-1 text-2xs font-medium text-white bg-red-600 -top-3 -right-1.5 rounded-full">
                                    {totalItems}
                                </span>
                            </p>
                        </Link>
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
                            className={`fixed inset-y-0 left-0 z-30 w-1/2 sm:w-1/3 overflow-y-auto transition duration-500 ease-out transform translate-x-0 bg-white border-r-2 ${
                                isSidebarOpen
                                    ? 'ease-out translate-x-0'
                                    : 'ease-in -translate-x-full'
                            }`}
                        >
                            <div className="flex items-center justify-center text-center mt-8">
                                <Link to="/" className="mb-2.5 text-xl font-semibold text-black">
                                    MStore
                                </Link>
                            </div>
                            <div className="flex flex-col text-center" onClick={() => setIsSidebarOpen(false)}>
                                <NavLink
                                    className="text-base font-medium m-1.5"
                                    to="/"
                                >
                                    Trang chủ
                                </NavLink>
                                <NavLink
                                    className="text-base font-medium m-1.5"
                                    to="/products"
                                >
                                    Sản phẩm
                                </NavLink>
                                <NavLink
                                    className="text-base font-medium m-1.5"
                                    to="/contact"
                                >
                                    Liên hệ
                                </NavLink>
                                {isLogin ? (
                                    <div
                                        to="/login"
                                        className="inline text-base font-medium mt-8 group relative"
                                    >
                                        <span className="font-medium">
                                            {current.name}
                                        </span>
                                        <AccountInfo />
                                    </div>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="text-base font-medium m-2 hover:cursor-pointer"
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
        </div>
    );
}

export default Header;
