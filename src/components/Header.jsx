import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core';


const Header = ({ childern }) => {

    const [isopen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isopen);

    return (
        <Typography>
        <div className="main-container">
            <div className="bgtop"></div>
            <motion.div animate={{ width: isopen ? "65vmax" : "85vmax", marginLeft: isopen ? "30vmax" : "8vmax", justifyContent: 'space-around' }} className="nav">
                <span className='nav1' onClick={toggle} ><MenuIcon /></span>
                <span className="nav2"><input type="text" placeholder='🔍  search or type a product name' /></span>
                <span className='nav3' color='#1D76CB'>intel</span>
                <span className="nav4"><NotificationsNoneIcon /></span>
                <span className="nav5"><PersonIcon /><span> Hussain Ahmed</span></span>
            </motion.div>
            </div>
            
        </Typography>
    )
}

export default Header;