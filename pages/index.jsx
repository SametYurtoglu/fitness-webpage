import Cards from '@/components/Cards/Cards'
import ShopCards from '@/components/Cards/ShopCards'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
import Image from 'next/image'
import { MdOutlineHighQuality } from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'


export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Quality Fitness</title>
        <meta name="description" content="Quality Fitness" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* bg */}
      <div className='bg-image w-full h-screen bg-cover bg-center'>
        {/* Navbar */}
            <div className='w-full top-0 left-0 fixed'>
                <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                  <div>
                    <h1 className='text-5xl font-bold font-sansita text-white'>LOGO</h1>
                  </div>
                  <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-6 md:hidden cursor-pointer bg-black py-1 px-2 bg-opacity-60 text-white flex items-center'>
                  <ion-icon name={open ? 'close':'menu'} className=''></ion-icon>
                  </div>
                  <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static xl:bg-transparent md:bg-transparent lg:bg-transparent 2xl:bg-transparent bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-75':'top-[-490px]'} gap-5`}>
                    <li className='font-sansita 2xl:bg-black xl:bg-black lg:bg-black md:bg-black 2xl:bg-opacity-60 xl:bg-opacity-60 lg:bg-opacity-60 md:bg-opacity-60 text-md text-amber-600 2xl:py-1 2xl:px-3 xl:py-1 xl:px-3 lg:py-1 lg:px-3 md:py-1 md:px-3 rounded-xl'><a href="#">Home</a></li>
                    <li className='font-sansita 2xl:bg-black xl:bg-black lg:bg-black md:bg-black 2xl:bg-opacity-60 xl:bg-opacity-60 lg:bg-opacity-60 md:bg-opacity-60 text-md text-amber-600 2xl:py-1 2xl:px-3 xl:py-1 xl:px-3 lg:py-1 lg:px-3 md:py-1 md:px-3 rounded-xl'><a href="#Pack">Paketlerimiz</a></li>
                    <li className='font-sansita 2xl:bg-black xl:bg-black lg:bg-black md:bg-black 2xl:bg-opacity-60 xl:bg-opacity-60 lg:bg-opacity-60 md:bg-opacity-60 text-md text-amber-600 2xl:py-1 2xl:px-3 xl:py-1 xl:px-3 lg:py-1 lg:px-3 md:py-1 md:px-3 rounded-xl'><a href="#">Hakkımızda</a></li>
                  </ul>
                </div>
            </div>
          {/* Navbar End */}

          {/* bg-text */}
          <div className='flex items-center justify-center h-[400px]'>
              <div className='text-center flex flex-col gap-2'>
                <h1 className='text-7xl text-amber-600 font-semibold font-sansita'>Profesyonel</h1>
                <span className='text-5xl text-amber-600 font-semibold font-sansita'>Fitness</span>
              </div>
          </div>
          {/* bg text end */}
      </div>
      {/* bg end */}
      {/* cards */}
        <div className=' mt-2 flex flex-col gap-10'>

          <div className='flex flex-col justify-center h-34 items-center gap-1'>
            <h1 className='text-amber-700 font-sansita font-bold text-2xl'>Neden Biz</h1>
            <p className='2xl:w-[700px] xl:w-[700px] lg:w-[600px] md:w-[500px] w-96 text-white font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse dolores. Fugit laboriosam rem vel impedit debitis veniam voluptas quis, hic dolorem, aperiam exercitationem, molestiae excepturi! Temporibus doloremque atque aliquid.</p>
          </div>

          <div className='flex justify-center mt-5 flex-wrap gap-20'>
              <Cards title='Kalite' desc='Sporcular Kaliteli bir ortamda Spor İmkanı' icon={<MdOutlineHighQuality />}/>
              <Cards title='Kalite' desc='Sporcular Kaliteli bir ortamda Spor İmkanı' icon={<MdOutlineHighQuality />}/>
              <Cards title='Kalite' desc='Sporcular Kaliteli bir ortamda Spor İmkanı' icon={<MdOutlineHighQuality />}/>
              <Cards title='Kalite' desc='Sporcular Kaliteli bir ortamda Spor İmkanı' icon={<MdOutlineHighQuality />}/>
            </div>

        </div>
        {/* cards end */}


        <div className='bg-amber-500 w-full h-[180px] mt-28 flex justify-between px-2 2xl:px-28 xl:px-28 lg:px-28 md:px-28  items-center'>
            <div>
                <h1 className='text-4xl font-sansita font-bold'>Quailty Fitness...</h1>
            </div>

            <div>
                <ul className=' font-medium'>
                  <li>Vücut Geliştirme</li>
                  <li>Tekwando</li>
                  <li>Boks</li>
                  <li>En Gelişmiş Aletler</li>
                  <li>Kalitenin Adresi</li>
                </ul>
            </div>
        </div>


        {/* Shop Cards */}
          <div id='Pack'>
          <div className='flex flex-col items-center gap-10 mt-5'>
              <div>
                <h1 className='text-3xl text-white font-sansita'>Paketlerimizi Aylık/Yıllık</h1>
              </div>

              <div className='flex flex-wrap gap-10 justify-center'>
                <ShopCards title='Vücut Geliştirme' price='140€' liste1='Deneme' liste2='Deneme' liste3='Deneme' liste4='Deneme' liste5='Deneme' liste6='Deneme' liste7='Deneme'/>
                <ShopCards title='Vücut Geliştirme' price='140€' liste1='Deneme' liste2='Deneme' liste3='Deneme' liste4='Deneme' liste5='Deneme' liste6='Deneme' liste7='Deneme'/>
                <ShopCards title='Vücut Geliştirme' price='140€' liste1='Deneme' liste2='Deneme' liste3='Deneme' liste4='Deneme' liste5='Deneme' liste6='Deneme' liste7='Deneme'/>
                <ShopCards title='Vücut Geliştirme' price='140€' liste1='Deneme' liste2='Deneme' liste3='Deneme' liste4='Deneme' liste5='Deneme' liste6='Deneme' liste7='Deneme'/>
              </div>

          </div>
          </div>
        {/* Shop Cards End */}


      </div>
      <Footer/>
    </>
  )
}
