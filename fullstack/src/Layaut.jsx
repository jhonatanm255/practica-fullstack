import React from 'react'
import Navbar from './organisms/Navbar'
import Sidebar from './organisms/Sidebar'
import MainContent from './organisms/MainContent'

function Layaut() {
  return (
    <>
        <div className='sticky top-0 z-10 bg-white'>
            <Navbar />
        </div>
        <div className='flex'>
            <div className='w-[20%] bg-white h-screen border-r-2 border-gray-100'>
                <Sidebar />
            </div>
            <div className='w-[80%] bg-white h-auto'>
                <MainContent />
            </div>
            
        </div>
    </>
  )
}

export default Layaut

