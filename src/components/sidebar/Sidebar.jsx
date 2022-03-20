import React from 'react'
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeIcon className='sidebarIcon'/>
              Home
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Car</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <InventoryIcon className='sidebarIcon'/>
              Manage
            </li>
            <li className="sidebarListItem">
              <DirectionsCarIcon className='sidebarIcon'/>
              Car list
            </li>
            <li className="sidebarListItem">
              <EqualizerIcon className='sidebarIcon'/>
              Car statistic
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonIcon className='sidebarIcon'/>
              User list
            </li>
            <li className="sidebarListItem">
              <ManageAccountsIcon className='sidebarIcon'/>
              User management
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Bills</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AddBoxIcon className='sidebarIcon'/>
              Bill management
            </li>
            <li className="sidebarListItem">
              <DescriptionIcon className='sidebarIcon'/>
              Bill statistic
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
