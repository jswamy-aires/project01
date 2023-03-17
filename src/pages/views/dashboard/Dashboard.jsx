import { Typography } from "@mui/material";
import React from "react";
import Arc from "../grid/Arc";
 import DashboardGrid from "../grid/DashboardGrid";
//import GridWithDrawer from "../grid/GridWithDrawer";


const Dashboard = () => {
    return <Typography>
             <Typography variant="h1">Dashboard</Typography>
             <DashboardGrid />

             </Typography>
};

export default Dashboard;