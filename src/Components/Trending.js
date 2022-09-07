import React from 'react';
import { useState, useEffect } from 'react';
import ProductSlideLoading from '~/Components/ProductSlideLoading';
import productsApi from '~/API/ProductsApi';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import ProductThumbnail from '~/Components/ProductThumbnail';

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
        <div className="mt-12">
            <div className="flex justify-between items-baseline">
                <p className="relative text-2xl font-semibold pl-2 mb-4 bg-amber-300 section-title">
                    Bán chạy nhất
                </p>
                <Link
                    to="/products"
                    className="text-sm opacity-70 font-medium hover:cursor-pointer hover:opacity-100 "
                >
                    ...xem tất cả
                </Link>
            </div>
            <div className=" sm:-mx-2 md:-mx-2 lg:-mx-2">
                {loading ? (
                    <ProductSlideLoading />
                ) : (
                    <Slider {...sliderSettings}>
                        {saleProduct.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="sm:px-2 md:px-2 lg:px-2"
                                >
                                    <ProductThumbnail product={product} />
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
