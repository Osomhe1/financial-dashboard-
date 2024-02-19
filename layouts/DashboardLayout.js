import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footers/Footer'
import HeaderStats from '../components/Headers/HeaderStats'
import Navbar from '../components/Navbars/Navbar'

// components

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
