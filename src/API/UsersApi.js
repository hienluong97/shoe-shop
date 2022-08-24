import firebase from 'firebase/compat/app';
const usersApi = {
    getMe: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const firebaseUser = firebase.auth().currentUser;
                resolve({
                    id: firebaseUser.uid,
                    name: firebaseUser.displayName,
                    email: firebaseUser.email,
                    photoURL: firebaseUser.photoURL,
                });
            }, 500);
        });
    },
};
export default usersApi;
