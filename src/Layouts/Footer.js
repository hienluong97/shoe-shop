import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer py-10 shadow-sm shadow-gray-500">
            <div className="container  px-1 sm:px-2 md:px-4 lg:px-14 mx-auto">
                <div className="flex justify-between items-start -mx-2.5 mb-4">
                    <div className="px-2.5 w-2/6 ">
                        <h5 className="text-xs font-light mb-4">
                            PHƯƠNG THỨC THANH TOÁN
                        </h5>
                        <div className="flex flex-wrap items-baseline">
                            <div className="mr-2">
                                <img
                                    src="https://tfruit.com.vn/wp-content/uploads/2020/03/logo-momo.png"
                                    alt="momo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="mr-2">
                                <img
                                    src="https://banner2.cleanpng.com/20180802/qo/kisspng-logo-visa-electron-credit-card-debit-card-visa-logo-5b62aa9d820235.5321822515331928615325.jpg"
                                    alt="momo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="mr-2">
                                <img
                                    src="https://pngimg.com/uploads/mastercard/mastercard_PNG23.png"
                                    alt="momo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="mr-2">
                                <img
                                    src="https://play-lh.googleusercontent.com/DvCn_h3AdLNNDcv3ftqTqP83gw6h65GMEPg3x6u788wB3F3ENNFcHgrHcWJNOPy4epg"
                                    alt="momo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="mr-2">
                                <img
                                    src="https://sharetmedia.com/wp-content/uploads/2021/08/unnamed-2.png"
                                    alt="momo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-2.5 w-2/6">
                        <h6 className="text-xs font-light mb-4">CHÍNH SÁCH</h6>
                        <Link
                            to="#"
                            className="text-2xs hover:underline hover:underline-offset-2"
                        >
                            Chính sách bảo mật
                        </Link>
                        <br />
                        <Link
                            to="#"
                            className="text-2xs hover:underline hover:underline-offset-2"
                        >
                            Chính sách vận chuyển
                        </Link>
                        <br />
                        <Link
                            to="#"
                            className="text-2xs hover:underline hover:underline-offset-2"
                        >
                            Chính sách đổi trả, bảo hành
                        </Link>
                    </div>
                    <div className="px-2.5 w-2/6">
                        <h6 className="text-xs font-light mb-4">
                            CONTACT INFO
                        </h6>
                        <p className="text-2xs leading-6.5">
                            <FontAwesomeIcon
                                className="pr-2 "
                                icon="fa-solid fa-location-dot"
                            />
                            203 Fake St. Mountain View, California, USA
                        </p>
                        <p className="text-2xs leading-6.5">
                            <FontAwesomeIcon
                                className="pr-2 "
                                icon="fa-solid fa-phone"
                            />{' '}
                            +2 392 3929 210
                        </p>
                        <p className="text-2xs leading-6.5">
                            <FontAwesomeIcon
                                className="pr-2 "
                                icon="fa-solid fa-envelope"
                            />
                            email@domain.com
                        </p>
                    </div>
                </div>
                <hr />
                <p className="text-2xs text-center mt-4">
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
