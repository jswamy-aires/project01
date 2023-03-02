import "./App.css";
import React from 'react'
import { Routes , Route } from 'react-router-dom'
import CRM from './pages/views/crm/CRM'
import Dashboard from './pages/views/dashboard/Dashboard'
import Help from './pages/views/help/Help'
import Notification from './pages/views/notification/Notification'
import Profile from './pages/views/profile/Profile'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <Sidebar/>
      <Routes> 
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/CRM' element={<CRM/>}/>
        <Route path='/Notification' element={<Notification/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
    </>
  )
}

export default App