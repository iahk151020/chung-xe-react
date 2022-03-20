import React from 'react';
import './topbar.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Chungxe admin</span>
                </div>
                <div className="topRight">
                  <div className="topbarIconContainer">
                    <SettingsIcon/>
                  </div>
                  <div className="topbarIconContainer">
                    <NotificationsNoneOutlinedIcon/>
                  </div>
                  <img 
                    src="https://genmec.vn/wp-content/uploads/2020/11/bao-cao-su-don-den-gai-deo-ngon-tay.jpg" 
                    alt="avatar" 
                    className="topAvatar" />              
                </div>
        </div>
    </div>
  )
}

export default Topbar