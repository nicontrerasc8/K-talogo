import React from 'react'
import { Nav } from '../../StyledComponents/Nav'
import Logo from '../../public/K-talogo.png'
import Image from 'next/image'
import FBimg from "../../public/fb.svg"

const MainNavBar = () => {
  return <Nav>
          <Image height={80} width={80} src={Logo}/>
  </Nav>
}

export default MainNavBar