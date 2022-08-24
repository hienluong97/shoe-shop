import React from 'react';
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

    return (
        <div className="w-full h-15 bg-white shadow-sm shadow-gray-200 fixed top-0 z-50">
            <div className="container  px-1 sm:px-2 md:px-4 lg:px-14 mx-auto">
                <div className="flex">
                    <div className="flex-none">
                        <p className="leading-[3.5rem] text-3xl text-amber-300 font-bold text-shadow-xl shadow-yellow-300 ">
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
                            Về chúng tôi
                        </NavLink>
                    </div>
                    <div className="flex-none">
                        <span className="text-xs leading-[3.5rem] m-2">
                            <FontAwesomeIcon
                                className="text-xs leading-[3.5rem]"
                                icon="fa-solid fa-magnifying-glass"
                            />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="text-xs py-1 pl-1 font-light placeholder:pl-1 placeholder:text-2xs outline-none"
                            />
                        </span>

                        {isLogin ? (
                            <div
                                to="/login"
                                className="inline py-6 text-xs font-light leading-[3.5rem] m-2 group relative"
                            >
                                Hi{' '}
                                <span className="font-medium">
                                    {current.name}
                                </span>
                                <div className="absolute z-10 w-32 right-0 bg-white invisible group-hover:visible shadow-md">
                                    <AccountInfo />
                                </div>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="text-xs font-light leading-[3.5rem] m-2 hover:cursor-pointer"
                            >
                                Đăng nhập
                            </Link>
                        )}
                        <Link to="/cart">
                            <span className="relative">
                                <FontAwesomeIcon
                                    className="text-xs leading-[3.5rem]"
                                    icon="fa-solid fa-cart-plus"
                                />
                                <p className="absolute px-1 text-3xs font-medium text-white bg-red-600 -top-1 -right-1.5 rounded-full">
                                    {totalItems}
                                </p>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
