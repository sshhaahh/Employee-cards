import React from 'react'
import { Testimonials } from './components/Testimonials';
import reviews from './data'

const App = () => {
  return (
    <div className='bg-[#b7bfc9] flex justify-center items-center w-[100vw] h-[100vh]'>
      <div className=' flex flex-col items-center'>
        <h1 className=' mb-1 text-3xl font-bold'>Our Testimonials</h1>
        <div className='bg-[#a74ef5] mb-6 w-[8rem] h-[0.2rem] '></div>
        <Testimonials reviews={reviews}/>
      </div>


    </div>
  )
}
export default App;