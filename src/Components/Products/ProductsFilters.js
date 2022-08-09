import React, { memo } from 'react';
import CategoryFilter from './CategoryFilter';
import SizeFilter from './SizeFilter';
import ColorFilter from './ColorFilter';

function ProductsFilters({ filters, onChange }) {
    console.log('product filter render');
    const HandleCategoryChange = (newCategoryIds) => {
        // console.log(newCategoryIds);
        if (!onChange) return;
        const newFilters = {
            ...filters,
            categoryIds: newCategoryIds,
        };
        onChange(newFilters);
    };
    return (
        <div>
            <CategoryFilter onChange={HandleCategoryChange} />
            <SizeFilter />
            <ColorFilter />
        </div>
    );
}

export default memo(ProductsFilters);
