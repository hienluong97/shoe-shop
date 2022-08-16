import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
