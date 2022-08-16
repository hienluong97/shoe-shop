import Home from '../Pages/Home';
import Products from '../Pages/Products';
import ProductDetail from '../Components/ProductDetail';
import About from '../Pages/About';
import Cart from '../Components/Features/Cart';
import CheckOut from '../Components/CheckOut';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    { path: '/products', component: Products },
    { path: '/products/:id', component: ProductDetail },
    { path: '/about', component: About },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: CheckOut },
];

export { publicRoutes };
