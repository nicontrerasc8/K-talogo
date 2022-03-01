import React from 'react'
import { Nav } from '../../StyledComponents/Nav'
import Logo from '../../public/K-talogo.png'
import Image from 'next/image'
import FBimg from "../../public/fb.svg"
import IGimg from "../../public/ig.svg"

const BrandNavBar = ({IG, FB}) => {
  return <Nav>
          <Image height={80} width={80} src={Logo}/>
       <div>
         {
           FB && <a target={"_blank"} rel='noreferrer' href={FB}>
              <Image src={FBimg} height={80} width={80}/>
            </a>
         }
         {
           IG && <a target={"_blank"} rel='noreferrer' href={IG}>
           <Image src={IGimg} height={80} width={80}/>
         </a>
         }
       </div>
  </Nav>
}

export default BrandNavBar