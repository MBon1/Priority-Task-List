import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen bg-green-50'>
        <Navbar></Navbar>
        <section className='bg-green-50 h-full'>
            <Outlet></Outlet>
        </section>
        {/* <Footer></Footer> */}
    </div>
  )
}

export default MainLayout