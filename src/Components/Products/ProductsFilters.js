import React from 'react';
import CategoryFilter from './CategoryFilter';
import SizeFilter from './SizeFilter';
import ColorFilter from './ColorFilter';

function ProductsFilters({ filters, onChange }) {
    const HandleCategoryChange = (newCategoryIds) => {
        // console.log(newCategoryIds);
        if (!onChange) return;
        const newFilters = {
            ...filters,
            categoryIds: newCategoryIds,
        };
        onChange(newFilters);
    };

    const HandleSizeChange = (newSize) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            size: newSize,
        };
        onChange(newFilters);
    };
    const HandleColorChange = (newColors) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            colors: newColors,
        };
        onChange(newFilters);
    };

    return (
        <div>
            <CategoryFilter onChange={HandleCategoryChange} />
            <SizeFilter onChange={HandleSizeChange} />
            <ColorFilter onChange={HandleColorChange} />
        </div>
    );
}

export default ProductsFilters;
