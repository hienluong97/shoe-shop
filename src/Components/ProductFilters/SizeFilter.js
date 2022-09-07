import React, { useState, useEffect } from 'react';

function SizeFilter({ filters, onChange }) {
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

    useEffect(() => {
        setSizes([]);
    }, [filters.active]);

    return (
        <div className="mb-8">
            <h6 className="text-xl font-medium mt-3">KÍCH CỠ</h6>
            {sizesList.map((size) => {
                return (
                    <label key={size} className="checkbox-container">
                        <input
                            type="checkbox"
                            onChange={() => hanldeChangeSize(size)}
                            checked={sizes.includes(size)}
                        />
                        <span className="checkmark"></span>
                        {size}
                    </label>
                );
            })}
        </div>
    );
}

export default SizeFilter;
