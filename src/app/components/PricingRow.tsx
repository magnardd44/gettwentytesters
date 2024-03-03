import React from 'react'
import Image from 'next/image'
import Checkmark from "../../../public/checkmark.png"


function PricingRow(props: {title: string}) {
  return (
    <div className='flex flex-row justify-center items-center gap-4'>
        <div className='relative w-8 h-8'><Image src={Checkmark} alt='checkmark' fill objectFit='cover'/></div>
        <p className='text-2xl'>{props.title}</p>
    </div>
  )
}

export default PricingRow