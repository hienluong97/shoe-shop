import React, { useState, useEffect } from 'react';

function SizeFilter({ onChange }) {
    const sizesList = [36, 37, 38, 39];
    const [sizes, setSizes] = useState([]);

    const hanldeChangeSize = (size) => {
        setSizes((prev) => {
            if (sizes.includes(size)) {
                return prev.filter((x) => x !== size);
            } else {
                return [...prev, size];
            }
        });
    };

    useEffect(() => {
        onChange(sizes);
    }, [sizes]);
    return (
        <div>
            <h6 className="text-xs font-medium mt-3">Kích cỡ sản phẩm</h6>
            {sizesList.map((size) => {
                return (
                    <label key={size} className="checkbox-container">
                        {size}
                        <input
                            type="checkbox"
                            onChange={() => hanldeChangeSize(size)}
                            checked={sizes.includes(size)}
                        />
                        <span className="checkmark"></span>
                    </label>
                );
            })}
        </div>
    );
}

export default SizeFilter;
