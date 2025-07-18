import './RootLayout.css';
import { Link,Outlet } from 'react-router-dom';

const RootLayout = ({ children }) => {
    return (
        <div className="root-layout">
            <header>
                <Link to="/" className='logo'>
                    <img src="logo.png" alt="Logo" />
                    <span>ChatBot</span>
                </Link>
                <div className="user"></div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;