import "./App.css";
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CRM from './pages/views/crm/CRM'
import Dashboard from './pages/views/dashboard/Dashboard'
import Help from './pages/views/help/Help'
import Notification from './pages/views/notification/Notification'
import Profile from './pages/views/profile/Profile'
import Sidebar from './components/Sidebar'
import { Grid, Box } from "@mui/material";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            {/* Your header content here */
              <Header />
            }
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3} spacing={2}>
          <Box p={3}>
            {<Sidebar />}
          </Box>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Box bgcolor="background.paper" mt={18} p={5}>
            {/* Right column content */

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path='/CRM' element={<CRM />} />
                <Route path='/Notification' element={<Notification />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Help' element={<Help />} />
              </Routes>
            }
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default App