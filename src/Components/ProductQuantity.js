import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductQuantity({ quantity, onChange, onDecre, onIncre }) {
    return (
        <div>
            <div className="flex items-center border border-spacing-2 border-black">
                <div
                    className="border-r border-black leading-4 hover:cursor-pointer hover:text-white hover:bg-black"
                    onClick={() => {
                        if (quantity < 2) {
                            onChange(1);
                            alert('Nhập ít nhất 1 sản phẩm');
                        } else {
                            onDecre(quantity);
                        }
                    }}
                >
                    <FontAwesomeIcon
                        icon="fa-solid fa-minus "
                        className="p-2.5  text-xs "
                    />
                </div>
                <div className="grow text-center">
                    <input
                        className="w-full outline-none text-center"
                        type="text"
                        value={quantity}
                        onChange={(e) => onChange(Number(e.target.value))}
                    />
                </div>
                <div
                    className="border-l border-black leading-4 hover:cursor-pointer hover:text-white hover:bg-black"
                    onClick={() => onIncre(quantity)}
                >
                    <FontAwesomeIcon
                        icon="fa-solid fa-plus "
                        className="p-2.5 text-xs"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductQuantity;
