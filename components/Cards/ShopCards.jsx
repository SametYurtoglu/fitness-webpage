import Image from 'next/image'
import React from 'react'
import {BsPatchCheck} from 'react-icons/bs'
import {IoIosCloseCircleOutline} from 'react-icons/io'

const ShopCards = ({title,price,liste1,liste2,liste3,liste4,liste5,liste6,liste7}) => {
  return (
    <div className='bg-gray-300 w-[300px] h-[420px] rounded-xl shadow-xl hover:scale-105 transition-all duration-300'>
                <div className='relative w-full h-[150px]'>
                  <Image alt='' src='/images/vücut.jpg' fill className='rounded-t-xl'/>
                </div>
                 <div className='flex flex-col gap-3 mt-2'>
                    <div className='flex justify-between px-5'>
                      <h1>{title}</h1>
                      <span>{price}</span>
                    </div>
                    <div className='flex justify-center'>
                      <ul className=''>
                        <li className='flex items-center gap-1'><BsPatchCheck className='text-blue-800 text-xl'/>{liste1}</li>
                        <li className='flex items-center gap-1'><BsPatchCheck className='text-blue-800 text-xl'/>{liste2}</li>
                        <li className='flex items-center gap-1'><IoIosCloseCircleOutline className='text-red-800 text-2xl'/>{liste3}</li>
                        <li className='flex items-center gap-1'><BsPatchCheck className='text-blue-800 text-xl'/>{liste4}</li>
                        <li className='flex items-center gap-1'><IoIosCloseCircleOutline className='text-red-800 text-2xl'/>{liste5}</li>
                        <li className='flex items-center gap-1'><BsPatchCheck className='text-blue-800 text-xl'/>{liste6}</li>
                        <li className='flex items-center gap-1'><BsPatchCheck className='text-blue-800 text-xl'/>{liste7}</li>
                      </ul>
                    </div>
                    <div className='flex justify-center'>
                      <button type='button' className='bg-amber-600 px-8 py-1 hover:bg-amber-400 rounded-lg transition-all'>Satın Al</button>
                    </div>
                 </div>

              </div>
  )
}

export default ShopCards