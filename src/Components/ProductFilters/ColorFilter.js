import React, { useState, useEffect } from 'react';

function ColorFilter({ filters, onChange }) {
    const colorsList = ['trang', 'den', 'do', 'hong', 'vang'];
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
        <div>
            <h6 className="text-xs font-medium mt-3">Màu sắc</h6>
            <div>
                {colorsList.map((color) => {
                    return (
                        <label key={color} className="checkbox-container">
                            {`Mau ${color}`}
                            <input
                                type="checkbox"
                                onChange={() => hanldeChangeColor(color)}
                                checked={colors.includes(color)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default ColorFilter;
