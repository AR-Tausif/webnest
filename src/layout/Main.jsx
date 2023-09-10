
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState } from 'react';

const Main = () => {
    const [theme, setTheme] = useState(false)

    return (
        <>
            <div className={`${theme && "dark"}`}>
                <NavigationBar theme={theme} setTheme={setTheme} />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default Main;