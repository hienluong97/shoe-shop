import React from 'react';
import { useEffect, useState } from 'react';
import productsApi from '~/API/ProductsApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@mui/material/Pagination';
import ProductsFilters from '~/Components/Products/ProductsFilters';

function Products() {
    const [filters, setFilters] = useState({
        categoryIds: [],
        size: [],
        color: [],
    });

    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('asc');
    const [filterProductList, setFilterProductList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productsApi.getAll({
                _page: page,
                _limit: 9,
                _sort: 'originalPrice',
                _order: order,
                category: filters.categoryIds,
                // filters.categoryIds.length === 0
                //     ? null
                //     : filters.categoryIds,
            });
            setFilterProductList(data);
        };
        fetchProducts();
    }, [page, order, filters]);

    const handleChangePage = (e, value) => {
        setPage(value);
    };
    const handleOrderChangeAsc = () => {
        setOrder('asc');
    };
    const handleOrderChangeDesc = () => {
        setOrder('desc');
    };
    console.log('product render');
    const handleFiltersChange = (newFilters) => {
        // console.log(newFilters);
        setFilters((prev) => {
            // console.log({ ...prev, ...newFilters });
            return { ...prev, ...newFilters };
        });
    };

    return (
        <div className="my-12">
            <div className="container  px-1 sm:px-2 md:px-4 lg:px-14 mx-auto">
                <div className="my-12">
                    <h4>For You</h4>
                    <p className="text-xs font-light">
                        Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán
                        Hàng Tuần sẽ được cập nhật liên tục tại đây. Chắc chắn
                        bạn sẽ tìm thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất -
                        Phù Hợp nhất với phong cách của mình.
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="fix h-full w-1/4 flex flex-col">
                        <ProductsFilters
                            filters={filters}
                            onChange={handleFiltersChange}
                        />

                        {/* <div>
                            <h6 className="text-xs font-medium">
                                Danh mục sản phẩm
                            </h6>
                            <label className="checkbox-container">
                                Converse
                                <input
                                    type="checkbox"
                                    value="Converse"
                                    onChange={handleOnChangeCheckbox}
                                />
                                <span className="checkmark"></span>
                            </label>

                            <label className="checkbox-container">
                                Vans
                                <input
                                    type="checkbox"
                                    value="Vans"
                                    onChange={handleOnChangeCheckbox}
                                />
                                <span className="checkmark"></span>
                            </label>

                            <label className="checkbox-container">
                                Adidas
                                <input
                                    type="checkbox"
                                    value="Adidas"
                                    onChange={handleOnChangeCheckbox}
                                />
                                <span className="checkmark"></span>
                            </label>

                            <label className="checkbox-container">
                                Puma
                                <input
                                    type="checkbox"
                                    value="Puma"
                                    onChange={handleOnChangeCheckbox}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div> */}
                        {/* <div>
                            <h6 className="text-xs font-medium mt-3">
                                Kích cỡ sản phẩm
                            </h6>
                            <label className="checkbox-container">
                                36
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                            <label className="checkbox-container">
                                37
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                            <label className="checkbox-container">
                                38
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                            <label className="checkbox-container">
                                39
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div> */}
                        {/* <div>
                            <h6 className="text-xs font-medium mt-3">
                                Màu sắc
                            </h6>
                            <div>
                                <label className="checkbox-container">
                                    Mau trang
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="checkbox-container">
                                    Mau den
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="checkbox-container">
                                    Mau do
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="checkbox-container">
                                    Mau hong
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-3/4">
                        <div className="flex justify-between">
                            <p className="text-xs font-medium">
                                Giày chính hãng - chất lượng
                            </p>
                            <div className="flex justify-between">
                                <p
                                    className="text-3xs px-5 py-1.5 border border-solid border-gray-300 hover:cursor-pointer hover:text-white hover:bg-black "
                                    onClick={handleOrderChangeAsc}
                                >
                                    Giá tăng dần
                                </p>
                                <p
                                    className="text-3xs px-5 py-1.5 border border-solid border-gray-300 hover:cursor-pointer hover:text-white hover:bg-black"
                                    onClick={handleOrderChangeDesc}
                                >
                                    Giá giảm dần
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between flex-wrap my-6 -mx-2.5">
                            {filterProductList.map((product) => {
                                return (
                                    <div
                                        key={product.id}
                                        className="sm:px-2 md:px-2 lg:px-2 w-1/3"
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
                        </div>
                        <div className="flex justify-center">
                            <Pagination count={5} onChange={handleChangePage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
