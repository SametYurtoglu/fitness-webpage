import Image from 'next/image'
import React from 'react'

const Cardİmages = ({image}) => {
  return (
    <div className='relative w-[180px] bg-center bg-cover cursor-pointer h-full hover:w-[350px] duration-300'>
        <Image alt='images' src={image} fill/>
    </div>
  )
}

export default Cardİmages