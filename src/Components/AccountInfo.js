import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Components/Features/Form/userSlice';
import firebase from 'firebase/compat/app';

function AccountInfo() {
    const dispatch = useDispatch();
    const handleClickLogoutBtn = () => {
        dispatch(logout());
        firebase.auth().signOut();
        localStorage.removeItem('firebaseRememberAccount');
    };

    return (
        <div>
            <ul>
                <li className="text-xs py-2 px-4 hover:border-l-2 hover:border-amber-300 hover:cursor-pointer hover:font-normal hover:border-l-1 shadow-sm">
                    <a href="#">Tài khoản</a>
                </li>
                <li className="text-xs py-2 px-4 hover:border-l-2 hover:border-amber-300 hover:cursor-pointer hover:font-normal shadow-sm">
                    <a href="#">Bộ sưu tập</a>
                </li>
                <li
                    className="text-xs py-2 px-4 hover:border-l-2 hover:border-amber-300 hover:cursor-pointer hover:font-normal shadow-sm"
                    onClick={handleClickLogoutBtn}
                >
                    <span>Đăng xuất</span>
                </li>
            </ul>
        </div>
    );
}

export default AccountInfo;
