import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <DashboardIcon />
    },

    {
        path: "/CRM",
        name: "CRM",
        icon: <CompareArrowsIcon />
    },
    {
        path: "/Notification",
        name: "Notification",
        icon: <NotificationsNoneIcon />
    },
    {
        path: "/Profile",
        name: "Profile",
        icon: <PersonIcon />
    },
    {
        path: "/Help",
        name: "Help & Documentation",
        icon: <HelpOutlineIcon />
    },

]

const Sidebar = ({ childern }) => {

    const [isopen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isopen);

    return (
        <div className="main-container">
            <div className="bgtop"></div>
            <motion.div animate={{ width: isopen ? "65vmax" : "85vmax", marginLeft: isopen ? "30vmax" : "8vmax", justifyContent: 'space-around' }} className="nav">
                <span className='nav1' onClick={toggle} ><MenuIcon /></span>
                <span className="nav2"><input type="text" placeholder='🔍  search or type a product name' /></span>
                <span className='nav3' color='#1D76CB'>intel</span>
                <span className="nav4"><NotificationsNoneIcon /></span>
                <span className="nav5"><PersonIcon /><span> Hussain Ahmed</span></span>
            </motion.div>

            <motion.div animate={{ width: isopen ? "250px" : "50px", }} className="sidebar">
                <div className='top_section'>
                    {isopen && <div className="logo"></div>}
                    {isopen && <h2 className="companyname">Company</h2>}
                    {/* <div className="bars" ><FaBars/></div> */}
                </div>

                <section className="routes">
                    {routes.map((route) => (
                        <NavLink activeClassName="active" className="link" to={route.path} key={route.name}>
                            <AnimatePresence>
                                <div className="icon">{route.icon}</div>
                                {isopen && <div className="link_text" >{route.name}</div>}
                            </AnimatePresence>
                        </NavLink>
                    ))}

                </section>
            </motion.div>
            <main>
                {childern}
            </main>
        </div>

    )
}

export default Sidebar;