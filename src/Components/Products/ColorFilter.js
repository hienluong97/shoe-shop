import React, { useState, useEffect } from 'react';

function ColorFilter({ onChange }) {
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

                {/* <label className="checkbox-container">
                    Mau trang
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-container">
                    Mau den
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-container">
                    Mau do
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-container">
                    Mau hong
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label> */}
            </div>
        </div>
    );
}

export default ColorFilter;
