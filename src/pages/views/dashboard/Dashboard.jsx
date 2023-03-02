import React from "react";
import DashboardGrid from "../grid/DashboardGrid";


const Dashboard = () => {
    return <div style={{position:"absolute",paddingLeft:"12vmax",
transform:"translate(-50%,-50%)",top:"35%",left:"25%"}} className="title"> 
    
   <h1>Dashboard</h1>
        <div>
            <DashboardGrid></DashboardGrid>
        </div>
    </div>;
};

export default Dashboard;