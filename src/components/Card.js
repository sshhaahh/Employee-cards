import React from 'react'
import { FaQuoteLeft ,FaQuoteRight } from "react-icons/fa";

function Card(props) {
    let data = props.data;
  return (
    <div className=' h-[22rem]   flex flex-col items-center justify-center rounded-sm relative transition-all duration-700 '>
        <div className='h-[150px] w-[150px] rounded-full absolute top-[-5rem] left-10 bg-[#a74ef5]'>
            <img className='rounded-full absolute top-2 right-2  ' src={data.image}></img>
        </div>
        <div className='text-xl font-bold mt-4 '>
            <p>{data.name}</p>
        </div>
        <div className='text-sm text-[#a74ef5] text-opacity-80 mb-3  '>
            <p className='text-opacity-50'>{data.job}</p>
        </div>
        <div className='text-sm text-[#a74ef5] text-opacity-80'>
            <FaQuoteLeft />
        </div>
        <div className='my-4 mx-16 h-[6rem] text-black text-opacity-70 text-center'>
            <p>{data.text}</p>
        </div>
        <div className='text-sm text-[#a74ef5] text-opacity-80'>
            <FaQuoteRight />
        </div>
        
        
    </div>
  )
}

export default Card