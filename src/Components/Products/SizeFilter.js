import React from 'react';

function SizeFilter(props) {
    return (
        <div>
            <h6 className="text-xs font-medium mt-3">Kích cỡ sản phẩm</h6>
            <label className="checkbox-container">
                36
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">
                37
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">
                38
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">
                39
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default SizeFilter;
