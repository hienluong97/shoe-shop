import Home from '../Pages/Home';
import Products from '../Pages/Products';
import ProductDetail from '../Components/ProductDetail';
import Contact from '../Pages/Contact';
import Cart from '../Components/Features/Cart/Cart';
import CheckOut from '../Components/CheckOut';
import LoginForm from '../Components/Features/Form/Login/LoginForm';
import RegisterForm from '../Components/Features/Form/Register/RegisterForm';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    { path: '/products', component: Products },
    { path: '/products/:id', component: ProductDetail },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: CheckOut },
    { path: '/login', component: LoginForm },
    { path: '/register', component: RegisterForm },
];

export { publicRoutes };
