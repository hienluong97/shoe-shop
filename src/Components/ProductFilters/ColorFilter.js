import React, { useState, useEffect } from 'react';

function ColorFilter({ filters, onChange }) {
    const colorsList = ['trắng', 'đen', 'đỏ', 'hồng', 'vàng', 'xanh'];
    const [colors, setColors] = useState([]);

    const hanldeChangeColor = (color) => {
        setColors((prev) => {
            if (colors.includes(color)) {
                return prev.filter((x) => x !== color);
            } else {
                return [...prev, color];
            }
        });
    };

    useEffect(() => {
        onChange(colors);
    }, [colors]);

    useEffect(() => {
        setColors([]);
    }, [filters.active]);

    return (
        <div className="mb-8">
            <h6 className="text-xl font-medium mt-3">MÀU SẮC</h6>
            <div>
                {colorsList.map((color) => {
                    return (
                        <label key={color} className="checkbox-container">
                            <input
                                type="checkbox"
                                onChange={() => hanldeChangeColor(color)}
                                checked={colors.includes(color)}
                            />
                            <span className="checkmark"></span>
                            {`Màu ${color}`}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default ColorFilter;
