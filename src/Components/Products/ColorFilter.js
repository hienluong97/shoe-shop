import React from 'react';

function ColorFilter(props) {
    return (
        <div>
            <h6 className="text-xs font-medium mt-3">Màu sắc</h6>
            <div>
                <label className="checkbox-container">
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
                </label>
            </div>
        </div>
    );
}

export default ColorFilter;
