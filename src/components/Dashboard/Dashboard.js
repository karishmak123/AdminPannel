import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import OrderSummury from '../Orders/OrderSummury';
import Activity from '../Activity/Activity.js';
import Menus from '../Menus/Menus.js'
import Feedback from '../Feedback/Feedback';
import RecentOrder from '../RecentOrder/RecentOrder.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    return (
        <div className="dashboard d-flex">
            <Sidebar />
            <div className="main-content flex-grow-1">
                <Header />
                <div className="mt-4 mx-4">
                    <h1 >Dashboard</h1>
                    
                    {/* Order Summary Section */}
                    <div className="row stats-container">
                        <OrderSummury />
                    </div>

                    {/* Activity and Menus Section */}
                    <div className="row stats-container">
                        <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
                            <div className="stat-card">
                                <Activity />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="stat-card wide">
                                <Menus />
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders and Feedback Section */}
                    <div className="row stats-container">
                        <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
                            <div className="stat-card">
                                <RecentOrder />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="stat-card wide">
                                <Feedback />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;
