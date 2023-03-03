import React from "react";
import { Button } from "@mui/material";

const CRM = () => {
    return <div style={{
        position: "absolute",
        transform: "translate(-50%,-50%)", top: "50vh", left: "50vmax"
    }} className="title">

        <div className="container">  <h2>CRM System With Marketing Capabilities</h2>
            <p>
                To increase the performance of your business and boost your revenue, you might want to install a CRM for sales. It will help you to work both with your already existing clients and prospects. A CRM for sales managers will come in handy for organizations of any size and sphere of activity.

            </p>
            <Button variant="contained" color="primary">
                GET STARTED
            </Button>
        </div>

    </div>;
};

export default CRM;