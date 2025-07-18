import './DashboardPage.css';
import { Outlet } from 'react-router-dom'

const DashboardPage = () => {
    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
};

export default DashboardPage;