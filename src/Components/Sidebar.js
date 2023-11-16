import React, { useState } from 'react'
import logo from '../assets/logo.png';
import profile from "../assets/GetnetD.jpg";
import Dashboard from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PaidIcon from '@mui/icons-material/Paid';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



function Sidebar(props) {
  const [inactive, setInactive]= useState(false);


  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className='logoContainer'>
        <img src={logo} alt='logo' />
        <h2 className='title'>EveryGreen</h2>
        
        

      </div>

      {/* <div className='burgerContainer'>
        <div className='burgerTrigger'></div>
        <div className='burgerMenu'></div>

      </div> */}
      <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>

        {inactive ? (
          <ArrowCircleRightIcon />
        ):(
          <ArrowCircleLeftIcon />
        )
        }

{/* 
        <button onClick={() => setInactive(!inactive)}>
        <ArrowCircleLeftIcon />
        </button> */}

      </div>
      <div className='profileContainer'>
        <img src={profile} alt='profile' />
        <div className='profileContents'>

          <p className='name'>Hello Getnet</p>
          <p>getnetamsalu@gmail.com</p>

        </div>
        

      </div>

      <div className='contentsContainer'>
        
        <ul>
          <li className='active'>
       
            <Dashboard  className='icon'/>
       
            <a href='/'>Dashboard</a>
          </li>
          <li>
        
          <NewspaperIcon className='icon' />
          
            <a href='/news'>News</a>
          </li>
          <li>

         <PaidIcon className='icon'/> 
            <a href='/transaction'>Transaction</a>
          </li>
          <li>
       <PaymentsIcon className='icon'/> 
            <a href='/performance'>Performance</a>
          </li>
          <li>
        <SettingsIcon className='icon'/>
            <a href='/setting'>Settings</a>
          </li>
        </ul>
        </div>
      
    </div>
  )
}

export default Sidebar
