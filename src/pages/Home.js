import React from 'react'
import './Home.css'
import { GrDashboard  ,GrTasks,GrUserSettings  } from 'react-icons/gr';
import {BiMessageRoundedCheck} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {SlCalender} from 'react-icons/sl'
import {SiIntel} from 'react-icons/si'
import {BsBell} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
const Home = () => {
  return (
    <div>
        <div className="bgtop"></div>
        <div className="navbar">
            <span className='nav1'><GiHamburgerMenu/></span>    
            <span className="nav2"><input type="text" placeholder='🔍search or type a product name' /></span>
            <span className='nav3'><SiIntel/></span>
            <span className="nav4"><BsBell/></span>
            <span className="nav5"><RxAvatar/> &nbsp; Hussain Ahmed</span>
        </div>
        <div className="sidebar">
            <div className="title">
                <span className="logo"></span>
                <span className='logo1'>Company Name</span>
            </div>
            <div className="dashboard"><GrDashboard/><span>Dashboard</span></div>
            <div className="tasks"><GrTasks/><span>Tasks</span></div>
            <div className="users"><GrUserSettings/><span>User</span></div>
            <div className="message"><BiMessageRoundedCheck/><span>Messages</span></div>
            <div className="calender"><SlCalender/> <span>Calender</span></div>

        </div>

    </div>

  )
}

export default Home