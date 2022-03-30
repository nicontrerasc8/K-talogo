import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import MetaTags from '../../Components/MetaTags'
import BrandNavBar from '../../Components/Navbars/BrandNavBar'
import WhatsAppButton from '../../Components/WhatsAppButton'
import { Prueba, Prueba2, Prueba3 } from '../../Lib/arrays'
import { firestore } from '../../Lib/firebase'
import { Button } from '../../StyledComponents/Button'

const ItemsContainer = styled.section`
  padding: 20px;
  display: flex;
  width: clamp(310px, 60%, 60%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 5px solid ${props => props.SectionBorder ? props.SectionBorder : 'var(--blue)'};
  h3{
       font-size: clamp(25px, calc(2vmax + 1rem), calc(2vmax + 1rem));
       margin: 1rem 0;
       text-align: center;
  }
`

const BrandContainer = ({Data}) => {

  return <>
     <MetaTags title={Data.BrandName}/>
     <BrandNavBar IG={Data.Instagram} FB={Data.Facebook}/>
     <WhatsAppButton phone={Data.PhoneNumber}/>
     <div className='page'>
          <h2 className='brand-name'>{Data.BrandName}</h2>
          <h5 className='brand-description'>{Data.Descripcion}</h5>
          {
               Data.Products && Data.Products.map((data,idx) => {
                    return <ItemsContainer SectionBorder={Data.Color} key={idx}>
                         <h3>{data.type}</h3>
                        <div className='cart-list'>
                        {
                              data.list.map((info, id) => {
                                   return <article key={id}>
                                        <img src={info.img} />
                                        <h4>{info.name}</h4>
                                        <p>s/.{info.price}</p>
                                        {info.brand && <p>Marca: {info.brand}</p>}
                                         {info.data && <p>{info.data}</p>
                                        <a target={"_blank"} rel='noreferrer' href={`https://api.whatsapp.com/send?phone=51${Data.PhoneNumber ? Data.PhoneNumber : 949161510}&text=${`¡Hola! vengo de su K-talogo. Me gustaría ordenar ${info.name}.`}`}>
                                             <Button Btncolor={Data.Color}>
                                                  Comprar
                                             </Button>
                                        </a>
                                   </article>
                              })
                         }
                        </div>
                    </ItemsContainer >
               })
          }
     </div>
  </>
}

export default BrandContainer

export async function getServerSideProps({query}){
     var {brand} = query
     var Data = []
     if(brand == "laeskinadelyuka") Data = Prueba
     if(brand == "licoreriacana") Data = Prueba2
     if(brand == "ilpastificio") Data = Prueba3

     return {props: {Data}}
}
