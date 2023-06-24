import React from 'react'
import Sample from '../Assets/Img/Sample.png'
import { CloseOutlined } from '@ant-design/icons'
function Card({items,setID}) {
  return (
    <div onClick={()=>setID(items?.id)} style={{width:"25%",position:"relative"}} className=' card-shadow br-20  bg-white p-20'>
        <CloseOutlined style={{position:"absolute",top:9,right:10,color:"red"}} />
        <h3 className='mb-5 overFlow-text'>{items?.title} </h3>
        <p className='mb-5 overFlow-text'>{items?.body} </p>
        <h4 style={{marginTop:"0"}} className='text-gray'>Mon, 21 Dec 2020 14:57 MGT</h4>
        <img src={Sample} width={"100%"}></img>
    </div>
  )
}

export default Card