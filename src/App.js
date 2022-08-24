import './App.scss';
import DefaultLayout from './Layouts';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Routes/routes';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getMe } from './Components/Features/Form/userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const config = {
    apiKey: 'AIzaSyByeFnEuM1w_nyksQSQaVczNidu0uD5oMA',
    authDomain: 'shoesweb-4d916.firebaseapp.com',
    projectId: 'shoesweb-4d916',
    storageBucket: 'shoesweb-4d916.appspot.com',
    messagingSenderId: '82930657164',
    appId: '1:82930657164:web:a42dbecddc93b12ae998a9',
    measurementId: 'G-H6Q1YG3NVN',
};
firebase.initializeApp(config);

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                if (!user) {
                    console.log('user is not login');
                    return;
                }

                try {
                    localStorage.setItem(
                        'firebaseRememberAccount',
                        JSON.stringify(user.providerData),
                    );
                    const actionResult = await dispatch(getMe());
                    const currentUser = unwrapResult(actionResult);
                    console.log(currentUser);
                } catch {
                    console.log('error');
                    return;
                }
            });
        return () => unregisterAuthObserver();
    }, []);

    return (
        <>
            {' '}
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Component = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DefaultLayout>
                                    <Component />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;

// https://shoe-data.herokuapp.com/products
