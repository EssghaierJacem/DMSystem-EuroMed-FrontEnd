import React from 'react';
import Navbar from '../components/BackOffice/Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="tab-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
