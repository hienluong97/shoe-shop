import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '../FormFields/TextField';
import EmailField from '../FormFields/EmailField';
import PasswordField from '../FormFields/PasswordField';
import ConfirmPasswordField from '../FormFields/ConfirmPasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Register() {
    const schema = yup
        .object({
            name: yup.string().required('* Vui lòng nhập tên của bạn'),
            username: yup
                .string()
                .required('* Vui lòng nhập tên tài khoản của bạn'),
            email: yup
                .string()
                .required('* Vui lòng nhập địa chỉ email')
                .email('Vui lòng điền địa chỉ email hợp lệ'),
            password: yup
                .string()
                .required('* Vui lòng nhập mật khẩu')
                .min(8, 'Vui lòng nhập ít nhất 8 kí tự'),
            confirmPassword: yup
                .string()
                .required('* Vui lòng nhập mật khẩu xác nhận')
                .min(8, 'Vui lòng nhập ít nhất 8 kí tự')
                .oneOf(
                    [yup.ref('password')],
                    'Chưa trùng khớp với mật khẩu trên',
                ),
        })
        .required();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <div className="mt-14 w-full ">
            <div className="container px-4 lg:px-8 mx-auto flex items-center justify-center">
                <div className="max-w-xs w-full space-y-8 my-8 md:px-6 py-8 md:shadow-md md:shadow-gray-300">
                    <div>
                        <h2 className="text-center text-xl font-medium">
                            Tạo tài khoản mới
                        </h2>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <TextField
                                control={control}
                                name="name"
                                error={errors.name}
                            />
                            <TextField
                                control={control}
                                name="username"
                                error={errors.username}
                            />
                            <EmailField
                                control={control}
                                name="email"
                                error={errors.email}
                            />
                            <PasswordField
                                control={control}
                                name="password"
                                error={errors.password}
                            />
                            <ConfirmPasswordField
                                control={control}
                                name="confirmPassword"
                                error={errors.confirmPassword}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-300 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                            >
                                Đăng kí
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                Bạn đã có tài khoản?
                                <Link
                                    to="/login"
                                    className="font-normal ml-1 text-indigo-600 hover:text-indigo-500"
                                >
                                    Đăng nhập
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
