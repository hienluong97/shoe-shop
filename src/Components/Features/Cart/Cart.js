import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    removeItem,
    updateQuantity,
    decrementAnItem,
    addToCart,
} from './cartSlice';
import EmptyCart from './EmptyCart.js';

function Cart() {
    const cartProducts = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        if (window.confirm('Bạn muốn xoá sản phẩm?')) {
            dispatch(removeItem(id));
        } else {
            return;
        }
    };

    const handleSubmit = (product, quantity) => {
        dispatch(updateQuantity({ product, quantity }));
    };

    const handleDecrementItem = (product) => {
        dispatch(decrementAnItem(product));
    };

    const handleAddtoCart = (product) => {
        dispatch(addToCart(product));
    };

    const totalItems = cartProducts.reduce((total, product) => {
        return total + product.quantity;
    }, 0);
    const subTotal = cartProducts.reduce((total, product) => {
        return total + product.quantity * product.salePrice;
    }, 0);

    return (
        <div className="my-28">
            <div className="container px-4 lg:px-8 mx-auto">
                {totalItems === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="mt-6 flex flex-col lg:flex-row justify-center lg:justify-between">
                        <div className="w-full lg:w-3/4 mr-6 flex flex-col">
                            <div className="flex items-center text-xl font-medium ">
                                <div className="flex w-full md:w-1/3 items-center ">
                                    Sản phẩm
                                </div>
                                <div className="w-2/3 hidden md:flex justify-between items-center">
                                    <div className="w-4/5 flex flex-col md:flex-row ">
                                        <div className="w-full md:w-1/3 mb-1 pl-4">
                                            Đơn giá
                                        </div>
                                        <div className="w-full md:w-1/3 mb-1 pl-4">
                                            Số lượng
                                        </div>
                                        <div className="w-full md:w-1/3 mb-1 pl-4">
                                            Thành tiền
                                        </div>
                                    </div>
                                    <div className="w-1/5"></div>
                                </div>
                            </div>

                            {cartProducts.map((product) => {
                                const quantity = product.quantity;
                                return (
                                    <div
                                        key={product.id}
                                        className="mb-3 flex items-center text-base  font-normal bg-slate-50"
                                    >
                                        <div className="flex flex-col md:flex-row w-1/3 items-center ">
                                            <div>
                                                <img
                                                    src={product.image}
                                                    width={140}
                                                    height={140}
                                                    alt={product.title}
                                                />
                                            </div>
                                            <div className="md:pl-4 w-full truncate">
                                                <Link
                                                    to={`/products/${product.id}`}
                                                >
                                                    {product.title}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="w-2/3 flex justify-between items-center">
                                            <div className="w-4/5 flex flex-col md:flex-row  ">
                                                <div className="w-full md:w-1/3 mb-1 md:mb-0 pl-4 ">
                                                    {new Intl.NumberFormat(
                                                        'vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        },
                                                    ).format(product.salePrice)}
                                                </div>
                                                <div className="w-full md:w-1/3 mb-1 md:mb-0 pl-4">
                                                    <div className="w-18 flex items-center border border-spacing-2 border-black ">
                                                        <div
                                                            className="w-1/3 flex justify-center text-center border-r border-black leading-4 hover:cursor-pointer hover:text-white hover:bg-black"
                                                            onClick={() => {
                                                                if (
                                                                    quantity ===
                                                                    1
                                                                ) {
                                                                    alert(
                                                                        'Ít nhất một sản phẩm',
                                                                    );
                                                                    return;
                                                                } else {
                                                                    handleDecrementItem(
                                                                        product,
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon="fa-solid fa-minus "
                                                                className="block p-2  text-xs "
                                                            />
                                                        </div>

                                                        <div className="w-1/3 text-center">
                                                            <input
                                                                className="w-full outline-none text-center"
                                                                type="text"
                                                                value={
                                                                    product.quantity
                                                                }
                                                                onChange={(
                                                                    e,
                                                                ) => {
                                                                    const quantity =
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        );
                                                                    handleSubmit(
                                                                        product,
                                                                        quantity,
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="w-1/3 flex justify-center text-center border-l border-black leading-4 hover:cursor-pointer hover:text-white hover:bg-black"
                                                            onClick={() =>
                                                                handleAddtoCart(
                                                                    product,
                                                                )
                                                            }
                                                        >
                                                            <FontAwesomeIcon
                                                                icon="fa-solid fa-plus "
                                                                className="block p-2  text-xs"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/3 mb-1 md:mb-0 pl-4 ">
                                                    {new Intl.NumberFormat(
                                                        'vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        },
                                                    ).format(
                                                        product.salePrice *
                                                            product.quantity,
                                                    )}
                                                </div>
                                            </div>
                                            <div className="w-1/5 text-right lg:text-left">
                                                <FontAwesomeIcon
                                                    icon="fa-solid fa-trash-can "
                                                    className="p-2.5 text-xs hover:opacity-70 hover:cursor-pointer"
                                                    onClick={() => {
                                                        handleRemoveItem(
                                                            product.id,
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="w-full lg:w-1/4 p-3 shadow-md">
                            <div className="flex justify-between lg:flex-wrap xl:flex-nowrap text-base font-nomal">
                                <div className="lg:w-full">Tổng sản phẩm</div>
                                <div>{totalItems}</div>
                            </div>
                            <div className="flex justify-between lg:flex-wrap xl:flex-nowrap text-base font-nomal">
                                <div className="lg:w-full">Thành tiền</div>
                                <div>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(subTotal)}
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col">
                                <Link
                                    to="/checkout"
                                    className="text-báe font-normal text-center  py-1  border border-spacing-2 border-black text-white bg-black hover:cursor-pointer hover:text-black hover:bg-white"
                                >
                                    ĐẶT HÀNG
                                </Link>
                                <Link
                                    to="/products"
                                    className="mt-3 text-báe font-normal text-center py-1  border border-spacing-2 border-black text-white bg-black hover:cursor-pointer hover:text-black hover:bg-white"
                                >
                                    TIẾP TỤC MUA SẮM
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
