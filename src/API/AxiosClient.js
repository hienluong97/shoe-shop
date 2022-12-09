import axios from 'axios';
import firebase from 'firebase/compat/app';

const getFirebaseToken = async () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) return currentUser.getIdToken();
    // not log in
    const hasRememberAccount = localStorage.getItem('firebaseRememberAccount');
    if (!hasRememberAccount) return null;
    // logged in but user is not fetch - wait
    return new Promise((resolve, reject) => {
        const waitTimer = setTimeout(() => {
            reject(null);
        }, 10000);
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                if (!user) {
                    return;
                }
                const token = await user.getIdToken();
                resolve(token);
                clearTimeout(waitTimer);
            });
        unregisterAuthObserver();
    });
};

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(async (config) => {
    const token = await getFirebaseToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default axiosClient;
