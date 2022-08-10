import React from 'react';
import CategoryFilter from './CategoryFilter';
import SizeFilter from './SizeFilter';
import ColorFilter from './ColorFilter';

function ProductsFilters({ filters, onChange }) {
    const HandleCategoryChange = (newCategoryIds) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            categoryIds: newCategoryIds,
            active: true,
        };
        onChange(newFilters);
    };
    const HandleSizeChange = (newSize) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            size: newSize,
            active: true,
        };
        onChange(newFilters);
    };
    const HandleColorChange = (newColors) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            colors: newColors,
            active: true,
        };
        onChange(newFilters);
    };
    const handleRemoveFilters = () => {
        const newFilters = {
            categoryIds: [],
            size: [],
            colors: [],
            active: false,
        };
        onChange(newFilters);
    };
    return (
        <div>
            <CategoryFilter onChange={HandleCategoryChange} filters={filters} />
            <SizeFilter onChange={HandleSizeChange} filters={filters} />
            <ColorFilter onChange={HandleColorChange} filters={filters} />
            <div
                className="text-xs mt-5 px-4 py-1.5 inline-block border border-solid border-gray-300 hover:cursor-pointer hover:text-white hover:bg-black"
                onClick={handleRemoveFilters}
            >
                Bỏ áp dụng
            </div>
        </div>
    );
}

export default ProductsFilters;
