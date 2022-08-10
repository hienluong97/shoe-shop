import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Slider from 'react-slick';

function ProductSlideLoading() {
    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
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
                },
            },
        ],
    };

    return (
        <Slider {...sliderSettings}>
            <div className="px-2.5">
                <div>
                    <Skeleton height={300} />
                </div>
            </div>
            <div className="px-2.5">
                <div>
                    <Skeleton height={300} />
                </div>
            </div>
            <div className="px-2.5">
                <div>
                    <Skeleton height={300} />
                </div>
            </div>
            <div className="px-2.5">
                <div>
                    <Skeleton height={300} />
                </div>
            </div>
        </Slider>
    );
}

export default ProductSlideLoading;
