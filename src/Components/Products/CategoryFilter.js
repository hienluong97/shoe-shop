import React, { useState, useEffect, memo } from 'react';
import categoryApi from '../../API/CategoryApi';

function CategoryFilter({ onChange }) {
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    // console.log(categoryIds);
    const hanldeChangeCategory = (id) => {
        // setCategoryIds((prev) => {
        //     if (categoryIds.includes(id)) {
        //         return prev.filter((x) => x !== id);
        //     } else {
        //         return [...prev, id];
        //     }
        // });
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

    console.log('render');

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

    return (
        <div>
            <h6 className="text-xs font-medium">Danh mục sản phẩm</h6>
            {categories.map((category) => {
                return (
                    <label key={category.id} className="checkbox-container">
                        {category.name}
                        <input
                            type="checkbox"
                            onChange={() => hanldeChangeCategory(category.id)}
                            checked={categoryIds.includes(category.id)}
                        />
                        <span className="checkmark"></span>
                    </label>
                );
            })}
        </div>
    );
}

export default memo(CategoryFilter);
