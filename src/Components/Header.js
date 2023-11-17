import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
  <header className='header'>
    <div className='header-left'>
        <SearchIcon className='icon'/>
    </div>
    <div className='header-right'>
        <EmailIcon className='icon' />
        <AccountCircleIcon className='icon' />
        <SettingsIcon className='icon' />

    </div>

  </header>
  )
}

export default Header
