import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div className=" flex flex-col text-center items-center">
            <div>
                <img
                    src="https://img.freepik.com/premium-vector/online-shop-logo-template_59362-81.jpg?w=360"
                    alt="img"
                    width={350}
                    height={350}
                />
            </div>
            <div>
                <p className="mb-4 text-sm font-normal ">
                    {' '}
                    Bạn chưa có sản phẩm nào trong giỏ hàng
                </p>
                <Link
                    to="/products"
                    className="text-xs font-normal text-center py-1.5 px-4 border border-spacing-2 border-black text-white bg-black hover:cursor-pointer hover:text-black hover:bg-white"
                >
                    Tiếp tục mua sắm
                </Link>
            </div>
        </div>
    );
}

export default EmptyCart;
