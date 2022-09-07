import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
    const paymentMethod = [
        {
            id: 1,
            name: 'momo',
            url: 'https://tfruit.com.vn/wp-content/uploads/2020/03/logo-momo.png',
        },
        {
            id: 2,
            name: 'visa',
            url: 'https://banner2.cleanpng.com/20180802/qo/kisspng-logo-visa-electron-credit-card-debit-card-visa-logo-5b62aa9d820235.5321822515331928615325.jpg',
        },
        {
            id: 3,
            name: 'mastercard',
            url: 'https://pngimg.com/uploads/mastercard/mastercard_PNG23.png',
        },
        {
            id: 4,
            name: 'vnpay',
            url: 'https://play-lh.googleusercontent.com/DvCn_h3AdLNNDcv3ftqTqP83gw6h65GMEPg3x6u788wB3F3ENNFcHgrHcWJNOPy4epg',
        },
        {
            id: 5,
            name: 'zalopay',
            url: 'https://sharetmedia.com/wp-content/uploads/2021/08/unnamed-2.png',
        },
    ];

    const posts = [
        {
            id: 1,
            title: 'Chính sách bảo mật',
            path: '#',
        },
        {
            id: 2,
            title: 'Chính sách vận chuyển',
            path: '#',
        },
        {
            id: 3,
            title: 'Chính sách đổi trả, bảo hành',
            path: '#',
        },
    ];
    return (
        <div className="footer py-10 shadow-sm shadow-gray-500">
            <div className="container px-4 lg:px-8 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start -mx-2.5 mb-4">
                    <div className="px-2.5 mb-7 w-full md:w-2/6 ">
                        <h5 className="text-base font-nomal mb-2 md:mb-4">
                            PHƯƠNG THỨC THANH TOÁN
                        </h5>
                        <div className="flex flex-wrap items-baseline">
                            {paymentMethod.map((method) => (
                                <div key={method.id} className="mr-2">
                                    <img
                                        src={method.url}
                                        alt={method.name}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="px-2.5 mb-7 w-full md:w-2/6">
                        <h6 className="text-base font-nomal mb-2 md:mb-4">
                            CHÍNH SÁCH
                        </h6>

                        {posts.map((post) => (
                            <p key={post.id}>
                                <Link
                                    to={post.path}
                                    className="text-sm hover:underline hover:underline-offset-2"
                                >
                                    {post.title}
                                </Link>
                            </p>
                        ))}
                    </div>
                    <div className="px-2.5 mb-7 w-full md:w-2/6">
                        <h6 className="text-base font-nomal mb-2 md:mb-4">
                            CONTACT INFO
                        </h6>
                        <p className="text-sm leading-6.5">
                            <FontAwesomeIcon
                                className="pr-2 "
                                icon="fa-solid fa-location-dot"
                            />
                            203 Fake St. Mountain View, California, USA
                        </p>
                        <p className="text-sm leading-6.5">
                            <FontAwesomeIcon
                                className="pr-2 "
                                icon="fa-solid fa-phone"
                            />{' '}
                            +2 392 3929 210
                        </p>
                        <p className="text-sm leading-6.5">
                            <FontAwesomeIcon
                                className="pr-2 "
                                icon="fa-solid fa-envelope"
                            />
                            email@domain.com
                        </p>
                    </div>
                </div>
                <hr />
                <p className="text-sm text-center m-8">
                    Copyright ©2022 All rights reserved | This template is made
                    with{' '}
                    <FontAwesomeIcon
                        className="pr-2"
                        icon="fa-solid fa-heart"
                    />{' '}
                    by Me
                </p>
            </div>
        </div>
    );
}

export default Footer;
