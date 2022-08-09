import './App.scss';
import Layout from './Layouts';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Products from '../src/Pages/Products';
import About from '../src/Pages/About';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;

// https://shoe-data.herokuapp.com/products
