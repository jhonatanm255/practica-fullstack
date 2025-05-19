import React from 'react'
import { LogoNavbar } from '../atoms/logo'
import Title from '../atoms/Title'

function TitleLogo() {

  return (
    <div className='flex items-center gap-3'>
      <LogoNavbar />
      <Title title="App FullStack" className='text-2xl text-gray-700 font-semibold'/>
    </div>
  )
}

export default TitleLogo