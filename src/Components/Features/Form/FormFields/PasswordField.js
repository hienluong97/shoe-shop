import React from 'react';
import { useController } from 'react-hook-form';

function PasswordField(props) {
    const { field } = useController(props);
    return (
        <div className="mt-2">
            <input
                type="password"
                {...field}
                placeholder={props.name}
                name={props.password}
                className="appearance-none relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 placeholder:font-light text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <p className="text-2xs text-red-600 font-light">
                {props.error?.message}
            </p>
        </div>
    );
}

export default PasswordField;
