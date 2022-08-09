import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import ProductlistLoading from '~/Components/ProductlistLoading';
import productsApi from '~/API/ProductsApi';
import Slider from 'react-slick';

function Trending() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const response = await productsApi.getAll();
            setProducts(response);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const saleProduct = products.filter((product) => {
        return (product.rating.rate = 5);
    });

    return (
        <div className="container px-1 sm:px-2 md:px-4 lg:px-14 mx-auto mt-12">
            <div className="flex justify-between items-baseline">
                <p className="relative text-base font-semibold leading-6 pl-2 mb-4 bg-amber-300 section-title">
                    Trending
                </p>
                <p className="text-2xs opacity-70 font-semibold hover:cursor-pointer hover:opacity-100 ">
                    ...show all
                </p>
            </div>
            <div className=" sm:-mx-2 md:-mx-2 lg:-mx-2">
                {loading ? (
                    <ProductlistLoading />
                ) : (
                    <Slider {...sliderSettings}>
                        {saleProduct.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="sm:px-2 md:px-2 lg:px-2"
                                >
                                    <div className="px-2.5 shadow-sm shadow-gray-200 group">
                                        <div className="relative">
                                            <img
                                                className="w-full"
                                                src={product.image}
                                                alt={product.title}
                                            />
                                            <div className="flex justify-between absolute bottom-0 w-full p-1.5 bg-slate-200 divide-x divide-gray-700 invisible group-hover:visible animate-bounce">
                                                <span className="text-2xs cursor-pointer hover:opacity-70">
                                                    Add to cart
                                                    <FontAwesomeIcon
                                                        className="text-xs leading-[3rem] pl-1 cursor-pointer hover:opacity-70"
                                                        icon="fa-solid fa-cart-plus"
                                                    />
                                                </span>
                                                <FontAwesomeIcon
                                                    className="text-xs leading-[3rem] pl-2 cursor-pointer hover:opacity-70"
                                                    icon="fa-solid fa-eye"
                                                />
                                            </div>
                                        </div>
                                        <div className="my-2">
                                            <p className="text-xs font-light truncate">
                                                {product.title}
                                            </p>
                                            <div className="pb-2 ">
                                                <span className="text-xs font-medium">
                                                    {new Intl.NumberFormat(
                                                        'vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        },
                                                    ).format(
                                                        product.originalPrice,
                                                    )}
                                                </span>
                                                {product.promotionPercent ===
                                                0 ? null : (
                                                    <span className="text-3xs mx-2 bg-yellow-200">
                                                        -
                                                        {
                                                            product.promotionPercent
                                                        }
                                                        %
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default Trending;
