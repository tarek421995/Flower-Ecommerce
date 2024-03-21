import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProps {
  setRatio: (value: number) => void;
}


export default function Hero({setRatio} : IProps) {
  return (
    <div className='w-full h-screen relative'>
      <Image src={'/flowers1.jpg'} alt='no Image' fill className="w-full h-full object-fill hidden md:block " onLoadingComplete={({ naturalWidth, naturalHeight }) =>
          setRatio(naturalWidth / naturalHeight)
        } />
      <div className='w-full flex-col md:hidden h-full relative flex items-center px-3 justify-center text-center'>
        <Image src={'/flower2.jpg'} alt='no image'  fill className="object-fill md:block " />

        <h1 className='mb-2 text-xl text-white/90 z-10 font-semibold '>Cheer up your lovers by the beatuy of Nature!</h1>
        <Link href={"/#my-Categories"} className='btn btn-ghost border border-orange-600 text-white/90 hover:bg-orange-600  z-40'>Shop Now</Link>


      </div>
    </div>
  )
}
