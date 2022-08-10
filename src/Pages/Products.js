import React from 'react';
import { useEffect, useState } from 'react';
import productsApi from '~/API/ProductsApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@mui/material/Pagination';
import ProductsFilters from '~/Components/ProductFilters/ProductsFilters';
import ProductlistLoading from '~/Components/ProductlistLoading';

function Products() {
    const [filters, setFilters] = useState({
        categoryIds: [],
        size: [],
        colors: [],
        active: false,
    });
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('asc');
    const [filterProductList, setFilterProductList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await productsApi.getAll({
                    _page: page,
                    _limit: 9,
                    _sort: 'originalPrice',
                    _order: order,
                    category: filters.categoryIds,
                    color: filters.colors,
                    size: filters.size,
                });
                setFilterProductList(data);
                setLoading(false);
            } catch {
                console.log('error');
            }
        })();
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
    const handleFiltersChange = (newFilters) => {
        setFilters((prev) => {
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
                            {loading ? (
                                <ProductlistLoading />
                            ) : (
                                filterProductList.map((product) => {
                                    return (
                                        <div
                                            key={product.id}
                                            className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3"
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
                                                                    currency:
                                                                        'VND',
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
                                })
                            )}
                        </div>
                        <div className="flex justify-center">
                            {filterProductList.length ? (
                                <Pagination
                                    count={5}
                                    onChange={handleChangePage}
                                />
                            ) : (
                                <p>Sorry ! Không tìm được sản phẩm phù hợp</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
