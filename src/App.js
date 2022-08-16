import './App.scss';
import DefaultLayout from './Layouts';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Routes/routes';

function App() {
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
