import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className="w-full h-12 bg-white shadow-sm shadow-gray-200 fixed top-0 z-10">
            <div className="container  px-1 sm:px-2 md:px-4 lg:px-14 mx-auto">
                <div className="flex">
                    <div className="flex-none">
                        <p className="leading-[3rem] text-2xl text-amber-300 font-bold text-shadow-xl shadow-yellow-300 ">
                            MStore
                        </p>
                    </div>
                    <div className="flex-1 text-center">
                        <NavLink
                            className=" leading-[3rem] text-xs font-light m-2"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="leading-[3rem] text-xs font-light m-2"
                            to="/products"
                        >
                            Product
                        </NavLink>
                        <NavLink
                            className="leading-[3rem] text-xs font-light m-2"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </div>
                    <div className="flex-none">
                        <span className="text-xs leading-[3rem] m-2">
                            <FontAwesomeIcon
                                className="text-xs leading-[3rem]"
                                icon="fa-solid fa-magnifying-glass"
                            />
                            <input
                                type="text"
                                placeholder="Search"
                                className="text-xs py-1 pl-1 font-light placeholder:pl-1 placeholder:text-3xs outline-none"
                            />
                        </span>
                        <span className="text-xs font-light leading-[3rem] m-2 hover:cursor-pointer">
                            Log in
                        </span>
                        <FontAwesomeIcon
                            className="text-xs leading-[3rem]"
                            icon="fa-solid fa-cart-plus"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
