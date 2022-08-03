import React from 'react'
import './header.css';
import { Icon, IconButton } from '@mui/material';
import logo from '../../assets/googlekeep.png';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {
    return (
        <>
            <div className="header-outer-box">
                <div className='header-inner-box'>

                    {/* 1 - App Logo and name */}
                    <div className='box-1'>
                        <IconButton onClick={props.listenToHeaderMenu} className='nav-button' id='menu' aria-label="main-menu" size="large">
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="Keep" />
                        <span>Keep</span>
                    </div>

                    {/* 2 - Search bar */}
                    <div className='box-2'>
                        <IconButton id='search' aria-label="search" size="large">
                            <SearchIcon />
                        </IconButton>
                        
                        <InputBase className='input-base' id='search-input' placeholder="Search" type='text' />

                        <IconButton className='clear-button' id='clear' aria-label="clear-search" size="large">
                            <ClearIcon />
                        </IconButton>
                    </div>

                    {/* 3 - Header Icon Groups */}
                    <div className='box-3'>
                        <IconButton>
                            <RefreshIcon />
                        </IconButton>
                        <IconButton className='header_icon-button' id="list-view" aria-label="list-view" size="large">
                            <ViewAgendaOutlinedIcon />
                        </IconButton>
                        <IconButton className='header_icon-button' id='setting' aria-label="setting" size="large">
                            <SettingsOutlinedIcon />
                        </IconButton>
                    </div>

                    {/* 4 - Account Section */}
                    <div className='box-4'>
                        <IconButton className='header_icon-button' id='app' aria-label="app" size="large">
                            <AppsRoundedIcon />
                        </IconButton>
                        <IconButton>
                            <AccountCircleRoundedIcon />
                        </IconButton>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header