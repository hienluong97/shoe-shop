import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import TextField from '../FormFields/TextField';
import EmailField from '../FormFields/EmailField';
import PasswordField from '../FormFields/PasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function LoginForm(props) {
    const schema = yup
        .object({
            username: yup
                .string()
                .required('* Vui lòng nhập tài khoản của bạn'),
            email: yup
                .string()
                .required('* Vui lòng nhập địa chỉ email')
                .email('Vui lòng điền địa chỉ email hợp lệ'),
            password: yup.string().required('* Vui lòng nhập mật khẩu'),
        })
        .required();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'redirect',
        // We will display Google and Facebook as auth providers.
        signInSuccessUrl: './',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
    };
    return (
        <div className="mt-14 w-full ">
            <div className="container px-4 lg:px-14 mx-auto flex items-center justify-center ">
                <div className="max-w-xs w-full space-y-6 my-8 md:px-6 py-8 md:shadow-md md:shadow-gray-300">
                    <div className="text-center text-xl font-medium">
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                    </div>
                    <form
                        className="mt-8 space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            {/* <TextField
                                control={control}
                                name="username"
                                error={errors.username}
                            /> */}
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
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm font-normal text-gray-900"
                                >
                                    Nhớ tài khoản
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-normal text-indigo-600 hover:text-indigo-500"
                                >
                                    Quên mật khẩu
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-300 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                            >
                                Đăng nhập
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                Bạn chưa có tài khoản?
                                <Link
                                    to="/register"
                                    className="font-normal ml-1 text-indigo-600 hover:text-indigo-500"
                                >
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-center">
                            <div className="text-sm">
                                <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
