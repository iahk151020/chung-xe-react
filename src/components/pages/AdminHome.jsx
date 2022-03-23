import React from 'react'
import Chart from '../chart/Chart';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import './adminHome.css';

function AdminHome() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart/>
    </div>
  )
}

export default AdminHome
