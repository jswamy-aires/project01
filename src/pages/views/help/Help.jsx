import React from "react";
import { Button } from "@mui/material";
import { Box } from "@material-ui/core";

const Help = () => {

    return <div style={{
        position: "absolute", paddingLeft: "12vmax",
        transform: "translate(-50%,-50%)", top: "60vh", left: "70vh"
    }} className="title">
        <div>
            <h2>How can we help?</h2>
            <Box m={1} p={1}>

                <p>
                    Account & Security <br />
                    Managing billing, plan changes, user roles and security.
                </p>
                <Button variant="contained" color="primary">
                    GET STARTED
                </Button>
            </Box>
            <Box m={1} p={1}>

                <p>
                    <br />
                    Contact Management <br />
                    Adding, managing, customizing and reporting on your Contacts.

                </p>
                <Button variant="contained" color="primary">
                    GET STARTED
                </Button>
            </Box>
            <Box m={1} p={1}>

                <p>
                    <br />
                    Calendar & Tasks <br />
                    Calendar and how to create, organize and report on Tasks.


                </p>
                <Button variant="contained" color="primary">
                    GET STARTED
                </Button>
            </Box>

        </div>

    </div>;
};

export default Help;