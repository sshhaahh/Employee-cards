import React, { useState } from 'react'
import Card from './Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const Testimonials = (props) => {
    let reviews=props.reviews;
    const[index,setIndex] = useState(0);
    function rightShiftHandler(){
       if(index+1>=reviews.length){
        setIndex(0);
       }else{
        setIndex(index+1);
       }
    }

    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }

  return (
    <div className='h-[28rem] w-[45rem]   flex flex-col justify-center items-center hover:drop-shadow-lg transition-all duration-600  relative bg-white' >
       <div className='absolute top-0 left-0'>
            <Card data={reviews[index]}/>
        </div >
        <div className='mb-20  text-lg text-[#a74ef5] absolute top-[21rem]'>
            <button onClick={leftShiftHandler} className='p-2'><FaAngleLeft /></button>
            <button onClick={rightShiftHandler} className='p-2'><FaAngleRight /></button>
        </div>

        <div className='absolute top-[23rem]'>
            <button onClick={surpriseHandler} class="bg-[#a74ef5] mt-2 mb-0 hover:bg-[#a241f7] text-white font-bold py-2 px-6 rounded-lg " >Surprised Me</button>
        </div>
        
    </div>
  )
}
