import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import productsApi from '~/API/ProductsApi';
import Pagination from '@mui/material/Pagination';
import ProductsFilters from '~/Components/ProductFilters/ProductsFilters';
import ProductlistLoading from '~/Components/ProductlistLoading';
import ProductThumbnail from '~/Components/ProductThumbnail';

function Products() {
    const [filters, setFilters] = useState({
        categoryIds: [],
        size: [],
        colors: [],
        active: false,
    });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('asc');
    const [filterProductList, setFilterProductList] = useState([]);
    const [totalPage, setTotalPage] = useState(6);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
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

    useEffect(() => {
        (async () => {
            try {
                const data = await productsApi.getAll({
                    category: filters.categoryIds,
                    color: filters.colors,
                    size: filters.size,
                });
                const totalProduct = data.length;
                totalProduct
                    ? setTotalPage(Math.ceil(totalProduct / 9))
                    : setTotalPage(1);
            } catch {
                console.log('error');
            }
        })();
    }, [page, order, filters]);

    useEffect(() => {
        setPage(1);
    }, [filters]);

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

    const [isFilterBarOpen, setIsFilterbarOpen] = useState(false);
    const handleOpenFilter = () => {
        setIsFilterbarOpen(true);
    };

    return (
        <div className="my-20">
            <div className="container px-4 lg:px-14 mx-auto">
                <div className="my-8">
                    <h4>For You</h4>
                    <p className="text-xs font-light">
                        Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán
                        Hàng Tuần sẽ được cập nhật liên tục tại đây. Chắc chắn
                        bạn sẽ tìm thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất -
                        Phù Hợp nhất với phong cách của mình.
                    </p>
                </div>
                <div
                    className="fixed bottom-4 right-4 z-30 text-xs font-medium px-4 py-1 mb-4 inline-block border border-solid border-gray-300  text-white bg-black hover:text-black hover:bg-white hover:cursor-pointer lg:hidden"
                    onClick={handleOpenFilter}
                >
                    Bộ lọc
                </div>

                <div className="flex justify-between">
                    <div className="h-full w-1/4 hidden lg:flex flex-col">
                        <ProductsFilters
                            filters={filters}
                            onChange={handleFiltersChange}
                        />
                    </div>
                    <div
                        className={`lg:hidden fixed inset-y-0 left-0 z-40 h-full px-4 py-7 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 ${
                            isFilterBarOpen
                                ? 'ease-out translate-x-0'
                                : 'ease-in -translate-x-full'
                        }`}
                    >
                        <div className="mb-2 flex justify-end">
                            <FontAwesomeIcon
                                icon="fa-solid fa-arrow-left"
                                className="opacity-70 hover:opacity-100 hover:cursor-pointer"
                                onClick={() => setIsFilterbarOpen(false)}
                            />
                        </div>
                        <ProductsFilters
                            filters={filters}
                            onChange={handleFiltersChange}
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <div className="flex  justify-center md:justify-end">
                            <div className="flex">
                                <p
                                    className="text-2xs font-light px-4 py-1 border border-solid border-gray-300 hover:cursor-pointer hover:text-white hover:bg-black "
                                    onClick={handleOrderChangeAsc}
                                >
                                    Giá tăng dần
                                </p>
                                <p
                                    className="text-2xs font-light px-4 py-1 border border-solid border-gray-300 hover:cursor-pointer hover:text-white hover:bg-black"
                                    onClick={handleOrderChangeDesc}
                                >
                                    Giá giảm dần
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap my-4 sm:-mx-2 md:-mx-2 lg:-mx-2.5">
                            {loading ? (
                                <ProductlistLoading />
                            ) : (
                                filterProductList.map((product) => {
                                    return (
                                        <div
                                            key={product.id}
                                            className="sm:px-2 md:px-2 lg:px-2 mb-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
                                        >
                                            <ProductThumbnail
                                                product={product}
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <div className="flex justify-center">
                            {filterProductList.length ? (
                                <Pagination
                                    count={totalPage}
                                    page={page}
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
