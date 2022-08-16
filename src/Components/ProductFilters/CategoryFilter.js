import React, { useState, useEffect } from 'react';
import categoryApi from '../../API/CategoryApi';

function CategoryFilter({ filters, onChange }) {
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await categoryApi.getAll();
                setCategories(response);
            } catch {
                console.log('error');
            }
        })();
    }, []);

    const hanldeChangeCategory = (id) => {
        setCategoryIds((prev) => {
            if (categoryIds.includes(id)) {
                return prev.filter((x) => x !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    useEffect(() => {
        onChange(categoryIds);
    }, [categoryIds]);

    useEffect(() => {
        setCategoryIds([]);
    }, [filters.active]);

    return (
        <div>
            <h6 className="text-sm font-medium">Danh mục sản phẩm</h6>
            {categories.map((category) => {
                return (
                    <label key={category.id} className="checkbox-container">
                        <input
                            type="checkbox"
                            onChange={() => hanldeChangeCategory(category.id)}
                            checked={categoryIds.includes(category.id)}
                        />
                        <span className="checkmark"></span>
                        {category.name}
                    </label>
                );
            })}
        </div>
    );
}

export default CategoryFilter;
