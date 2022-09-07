import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useController } from 'react-hook-form';

function RadioField(props) {
    const { field } = useController(props);

    const methods = [
        {
            id: 1,
            title: 'Thanh toán thẻ (ATM, Visa , MasterCard)',
            icon: 'fa-solid fa-credit-card',
        },
        {
            id: 2,
            title: 'Thanh toán bằng ví ShopeePay',
            icon: 'fa-solid fa-wallet',
        },
        {
            id: 3,
            title: 'Thanh toán khi giao hàng (COD)',
            icon: 'fa-solid fa-truck-moving',
        },
    ];
    return (
        <div className="mt-2">
            {methods.map((method) => {
                return (
                    <div key={method.id}>
                        <input
                            {...field}
                            type="radio"
                            name={props.name}
                            value={method.title}
                            id={method.id}
                        />
                        <label
                            className="text-sm font-normal pl-2"
                            htmlFor={method.id}
                        >
                            <FontAwesomeIcon
                                className="text-2xs pr-1"
                                icon={method.icon}
                            />
                            {method.title}
                        </label>
                    </div>
                );
            })}
            <p className="text-2xs text-red-600 font-light">
                {props.error?.message}
            </p>
        </div>
    );
}

export default RadioField;
