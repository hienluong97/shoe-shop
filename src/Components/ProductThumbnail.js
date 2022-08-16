import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addItem } from '../Components/Features/cartSlice';

function ProductThumbnail({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="px-2.5 shadow-sm shadow-gray-200 group">
            <div className="relative">
                <img
                    className="w-full"
                    src={product.image}
                    alt={product.title}
                />
                <div className="text-xs flex justify-between absolute bottom-0 w-full p-1.5 bg-slate-200 divide-x divide-gray-700 invisible group-hover:visible animate-bounce">
                    <p
                        className="text-2xs cursor-pointer hover:opacity-70"
                        onClick={() => dispatch(addItem(product))}
                    >
                        Thêm vào giỏ hàng
                        <FontAwesomeIcon
                            className="pl-1 cursor-pointer hover:opacity-70"
                            icon="fa-solid fa-cart-plus"
                        />
                    </p>
                    <Link to={`/products/${product.id}`}>
                        <FontAwesomeIcon
                            className="pl-2 cursor-pointer hover:opacity-70"
                            icon="fa-solid fa-eye"
                        />
                    </Link>
                </div>
            </div>
            <div className="my-2">
                <p className="text-xs font-light truncate">{product.title}</p>
                <div className="pb-2 ">
                    <span className="text-xs font-medium">
                        {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        }).format(product.originalPrice)}
                    </span>
                    {product.promotionPercent === 0 ? null : (
                        <span className="text-3xs mx-2 bg-yellow-200">
                            -{product.promotionPercent}%
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductThumbnail;
