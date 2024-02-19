import React from 'react'

// components

import Sidebar from 'components/Sidebar/Sidebar.js'
import HeaderStats from 'components/Headers/HeaderStats.js'
import Navbar from 'components/Navbars/Navbar.js'
import Footer from 'components/Footers/Footer.js'

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <Navbar />
        {/* Header */}
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
