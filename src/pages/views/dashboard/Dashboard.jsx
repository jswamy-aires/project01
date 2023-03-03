import React from "react";
import DashboardGrid from "../grid/DashboardGrid";


const Dashboard = () => {
    return <div style={{
        position: "absolute", paddingLeft: "12vmax",
        transform: "translate(-50%,-50%)", top: "35%", left: "25%"
    }} className="title">

        <h1>Dashboard</h1>
        <div style={{ position: "absolute", height: "100vh", width: "70vmax" }} className="Grid">
            <DashboardGrid />
        </div>
    </div>;
};

export default Dashboard;