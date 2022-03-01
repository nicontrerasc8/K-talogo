import React from 'react'
import Image from "next/image"
import WhatsAppImage from "../public/wa.svg"

const WhatsAppButton = ({phone}) => {


    return <a rel="noreferrer" target="_blank" className='wa-button' href={`https://api.whatsapp.com/send?phone=51${phone ? phone : 949161510}&text=${`¡Hola! vengo de su K-talogo.`}`} >
            <Image src={WhatsAppImage} width={80} height={80}/>
        </a>
}

export default WhatsAppButton