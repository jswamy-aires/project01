import { Box, Button } from "@mui/material";
import Container from '@material-ui/core/Container';
import React from "react";

const Profile = () => {
    return <div style={{
        position: "absolute",
        transform: "translate(-50%,-50%)", top: "60vh", left: "80vh"
    }} className="title">

        <Container maxWidth="lg">
            <h2>Profile</h2>
            <Box m={1} p={1}>
                <p>
                    Account <br />
                    Managing billing, plan changes, user roles and security.
                </p>
                <Button variant="contained" color="primary">
                    GET STARTED
                </Button>
            </Box>
        </Container>

        <Container maxWidth="lg">
            <Box m={1} p={1}>
                <p>
                    <br />
                    Role Management <br />
                    Adding, managing, customizing roles.

                </p>
                <Button variant="contained" color="primary">
                    GET STARTED
                </Button>
            </Box>
        </Container>
        <Container maxWidth="lg">
            <Box m={1} p={1}>
                <p>
                    <br />
                    Calendar & Tasks <br />
                    Calendar and how to create, organize and report on Tasks.
                </p>
                <Button variant="contained" color="primary">
                    GET STARTED
                </Button>
            </Box>
        </Container>

    </div>
};

export default Profile;