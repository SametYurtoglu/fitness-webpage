import Image from 'next/image'
import React from 'react'

const ShopCards = ({title,price,liste1,liste2,liste3,liste4,liste5,liste6,liste7}) => {
  return (
    <div className='bg-white w-[300px] h-[420px] rounded-xl'>
                <div className='relative w-full h-[150px]'>
                  <Image alt='' src='/images/vücut.jpg' fill className='rounded-t-xl'/>
                </div>
                 <div className='flex flex-col gap-3 mt-2'>
                    <div className='flex justify-between px-5'>
                      <h1>{title}</h1>
                      <span>{price}</span>
                    </div>
                    <div className='flex justify-center'>
                      <ul>
                        <li>{liste1}</li>
                        <li>{liste2}</li>
                        <li>{liste3}</li>
                        <li>{liste4}</li>
                        <li>{liste5}</li>
                        <li>{liste6}</li>
                        <li>{liste7}</li>
                      </ul>
                    </div>
                    <div className='flex justify-center'>
                      <button type='button' className='bg-amber-600 px-8 py-1'>Satın Al</button>
                    </div>
                 </div>

              </div>
  )
}

export default ShopCards