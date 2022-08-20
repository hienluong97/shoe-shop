import React from 'react';
import { useController } from 'react-hook-form';

function EmailField(props) {
    const { field } = useController(props);
    return (
        <div className="mt-2">
            <label htmlFor="email-adress" className="sr-only">
                Email
            </label>
            <input
                {...field}
                placeholder={props.name}
                name={props.name}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 placeholder:font-light text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <p className="text-2xs text-red-600 font-light">
                {props.error?.message}
            </p>
        </div>
    );
}

export default EmailField;
