import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiCivicrm } from 'react-icons/si';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { ImProfile } from 'react-icons/im';
import { BiHelpCircle } from 'react-icons/bi';
import {GiHamburgerMenu } from 'react-icons/gi';
import {SiIntel} from 'react-icons/si';
import {BsBell} from 'react-icons/bs';
import {RxAvatar} from 'react-icons/rx';


const routes = [
    {
        path:"/",
        name:"Dashboard",
        icon:<AiOutlineDashboard/>
    },

    {
        path:"/CRM",
        name:"CRM",
        icon:<SiCivicrm/>
    },
    {
        path:"/Notification",
        name:"Notification",
        icon:<IoMdNotificationsOutline/>
    },
    {
        path:"/Profile",
        name:"Profile",
        icon:<ImProfile/>
    },
    {
        path:"/Help",
        name:"Help & Documentation",
        icon:<BiHelpCircle/>
    },

]

const Sidebar = ({childern}) => {

    const[isopen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isopen);

  return (
    

    
    <div className="main-container">
        <div className="bgtop"></div>
        <motion.div animate={{width:isopen ? "65vmax": "85vmax", marginLeft:isopen ? "30vmax":"8vmax",justifyContent:'space-around'}} className="nav">
            <span className='nav1'onClick={toggle} ><GiHamburgerMenu/></span>    
            <span className="nav2"><input type="text" placeholder='🔍search or type a product name' /></span>
            <span className='nav3'><SiIntel/></span>
            <span className="nav4"><BsBell/></span>
            <span className="nav5"><RxAvatar/> &nbsp; Hussain Ahmed</span>
        </motion.div>

        <motion.div animate={{width:isopen ? "250px": "0px" ,marginLeft:isopen ? "0px" : "-100px"}} className="sidebar">
            <div className='top_section'>
                {isopen &&  <div className="logo"></div>}
                {isopen && <h2 className="companyname">Company</h2>}
                {/* <div className="bars" ><FaBars/></div> */}
            </div>

            <section className="routes">
                {routes.map((route) =>(
                    <NavLink activeClassName="active" className="link" to={route.path} key={route.name}>
                        <AnimatePresence>
                            {isopen && <div className="icon">{route.icon}</div>}
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