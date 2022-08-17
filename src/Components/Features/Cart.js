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

function Cart() {
    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleSubmit = (product, quantity) => {
        dispatch(updateQuantity({ product, quantity }));
    };

    const totalItems = cartProducts.reduce((total, product) => {
        return total + product.quantity;
    }, 0);
    const totalPrice = cartProducts.reduce((total, product) => {
        return total + product.quantity * product.salePrice;
    }, 0);

    return (
        <div className="my-16">
            <div className="container  px-1 sm:px-2 md:px-4 lg:px-14 mx-auto">
                <div className="mt-6 flex justify-between">
                    <div className="w-3/4 mr-6 flex flex-col">
                        <div className="flex items-center text-sm font-medium ">
                            <div className="flex w-1/3 items-center ">
                                Sản phẩm
                            </div>
                            <div className="w-2/3 flex items-center">
                                <div className="w-1/4  pl-6 text-sm">
                                    Đơn giá
                                </div>
                                <div className="w-1/4 pl-6">Số lượng</div>
                                <div className="w-1/4 pl-6">Thành tiền</div>
                                <div className="w-1/4 pl-6"></div>
                            </div>
                        </div>

                        {cartProducts.map((product) => {
                            const quantity = product.quantity;
                            return (
                                <div
                                    key={product.id}
                                    className="mt-4 flex items-center text-xs font-light"
                                >
                                    <div className="flex w-1/3 items-center ">
                                        <div>
                                            <img
                                                src={product.image}
                                                width={160}
                                                height={160}
                                            />
                                        </div>
                                        <div className="pl-6">
                                            {product.title}
                                        </div>
                                    </div>
                                    <div className="w-2/3 flex items-center">
                                        <div className="w-1/4  pl-6 ">
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(product.salePrice)}
                                        </div>
                                        <div className="w-1/4 pl-6 flex items-center">
                                            <div className="flex items-center border border-spacing-2 border-black ">
                                                <div
                                                    className="w-1/3 text-center border-r border-black leading-4 hover:cursor-pointer hover:text-white hover:bg-black"
                                                    onClick={() => {
                                                        if (quantity === 1) {
                                                            alert(
                                                                'Ít nhất một sản phẩm',
                                                            );
                                                            return;
                                                        } else {
                                                            dispatch(
                                                                decrementAnItem(
                                                                    product,
                                                                ),
                                                            );
                                                        }
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-solid fa-minus "
                                                        className="p-1.5  text-2xs "
                                                    />
                                                </div>

                                                <div className="w-1/3 text-center">
                                                    <input
                                                        className="w-full outline-none text-center"
                                                        type="text"
                                                        value={product.quantity}
                                                        onChange={(e) => {
                                                            const quantity =
                                                                Number(
                                                                    e.target
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
                                                    className="w-1/3 text-center border-l border-black leading-4 hover:cursor-pointer hover:text-white hover:bg-black"
                                                    onClick={() =>
                                                        dispatch(
                                                            addToCart(product),
                                                        )
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-solid fa-plus "
                                                        className="p-1.5  text-2xs"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/4 pl-6 ">
                                            {' '}
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(
                                                product.salePrice *
                                                    product.quantity,
                                            )}
                                        </div>
                                        <div className="w-1/4 pl-6">
                                            {' '}
                                            <FontAwesomeIcon
                                                icon="fa-solid fa-trash-can "
                                                className="p-2.5 text-2xs hover:opacity-70 hover:cursor-pointer"
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
                    <div className="w-1/4 p-3 shadow-md">
                        <div className="flex justify-between text-sm font-medium">
                            <div>Tổng sản phẩm</div>
                            <div>{totalItems}</div>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                            <div>Thành tiền</div>
                            <div>
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(totalPrice)}
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <Link
                                to="/checkout"
                                className="text-xs font-normal text-center  py-1.5  border border-spacing-2 border-black text-white bg-black hover:cursor-pointer hover:text-black hover:bg-white"
                            >
                                Đặt hàng
                            </Link>
                            <Link
                                to="/products"
                                className="mt-3 text-xs font-normal text-center py-1.5  border border-spacing-2 border-black text-white bg-black hover:cursor-pointer hover:text-black hover:bg-white"
                            >
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
