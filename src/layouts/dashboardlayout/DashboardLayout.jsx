import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
           <div className="menue">MENU</div>
           <div className="content">
                <Outlet />
           </div>
        </div>
    );
};

export default DashboardLayout;