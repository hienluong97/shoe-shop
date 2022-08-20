import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import TextField from '../FormFields/TextField';
import EmailField from '../FormFields/EmailField';
import PasswordField from '../FormFields/PasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function LoginForm(props) {
    const schema = yup
        .object({
            name: yup.string().required('* Vui lòng điền vào trường này'),
            username: yup.string().required('* Vui lòng điền vào trường này'),
            email: yup
                .string()
                .required('* Vui lòng điền vào trường này')
                .email('Vui lòng điền địa chỉ email hợp lệ'),
            password: yup
                .string()
                .required('* Vui lòng điền vào trường này')
                .min(8, 'Vui lòng nhập ít nhất 8 kí tự'),
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
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    // (function () {
    //     console.log('Start file login with firebase');
    // Initialize Firebase
    // var config = {
    //     apiKey: 'xxxxx',
    //     authDomain: 'e-commerce-63c3e.firebaseapp.com',
    //     databaseURL: 'xxxx.firebaseio.com',
    //     projectId: 'e-commerce-63c3e',
    //     storageBucket: 'e-commerce-63c3e.appspot.com',
    //     messagingSenderId: '87733138523',
    // };
    // firebase.initializeApp(config);
    // var database = firebase.database();

    //Google singin provider
    // var ggProvider = new firebase.auth.GoogleAuthProvider();
    //Facebook singin provider
    //  var fbProvider = new firebase.auth.FacebookAuthProvider();
    //Login in variables
    // const btnGoogle = document.getElementById('btnGoogle');
    //  const btnFaceBook = document.getElementById('btnFacebook');

    //Sing in with Google
    // btnGoogle.addEventListener(
    //     'click',
    //     (e) => {
    //         firebase
    //             .auth()
    //             .signInWithPopup(ggProvider)
    //             .then(function (result) {
    //                 var token = result.credential.accessToken;
    //                 var user = result.user;
    //                 console.log('User>>Goole>>>>', user);
    //                 userId = user.uid;
    //             })
    //             .catch(function (error) {
    //                 console.error('Error: hande error here>>>', error.code);
    //             });
    //     },
    //     false,
    // );

    //Sing in with Facebook
    // btnFaceBook.addEventListener(
    //     'click',
    //     (e) => {
    //         firebase
    //             .auth()
    //             .signInWithPopup(fbProvider)
    //             .then(function (result) {
    //                 // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //                 var token = result.credential.accessToken;
    //                 // The signed-in user info.
    //                 var user = result.user;
    //                 console.log('User>>Facebook>', user);
    //                 // ...
    //                 userId = user.uid;
    //             })
    //             .catch(function (error) {
    //                 // Handle Errors here.
    //                 var errorCode = error.code;
    //                 var errorMessage = error.message;
    //                 // The email of the user's account used.
    //                 var email = error.email;
    //                 // The firebase.auth.AuthCredential type that was used.
    //                 var credential = error.credential;
    //                 // ...
    //                 console.error(
    //                     'Error: hande error here>Facebook>>',
    //                     error.code,
    //                 );
    //             });
    //     },
    //     false,
    // );
    //jquery
    // })();

    return (
        <div className="mt-14 w-full ">
            <div className="container flex items-center justify-center px-1 sm:px-2 md:px-4 lg:px-14 mx-auto">
                <div className="max-w-xs w-full space-y-6 my-8 px-6 py-8 shadow-md shadow-gray-300">
                    <div>
                        <h2 className="text-center text-xl font-medium">
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </h2>
                    </div>
                    <form className="mt-8 space-y-4">
                        <div className="shadow-sm">
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
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                Hoặc đăng nhập với tài khoản
                                <button
                                    to="#"
                                    id="btnGoogle"
                                    className="font-normal ml-1 text-indigo-600 hover:text-indigo-500"
                                >
                                    Google
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
