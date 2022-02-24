import React from 'react'
import { Nav } from '../../StyledComponents/Nav'
import Logo from '../../public/K-talogo.png'
import Image from 'next/image'

const BrandNavBar = () => {
  return <Nav>
       <div className='logo'>
          <Image height={80} width={80} src={Logo}/>
       </div>
  </Nav>
}

export default BrandNavBar