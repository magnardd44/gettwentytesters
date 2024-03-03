import Image, { StaticImageData } from 'next/image'
import React from 'react'


function HowItWorksCard(props: {title: string, text: any, image: any}) {
  return (
    <div className='bg-cardBg w-[80%] py-10 my-10 flex justify-between items-center px-20 rounded-3xl'>
        <div className='font-bold w-3/5'>
                <div><p className='text-4xl pb-5'>{props.title}</p></div>
                <div>{props.text}</div>
        </div>
        <div className=''>
            <div className='relative w-96 h-96 rounded-2xl bg-cardBg overflow-hidden'>
                <Image src={props.image.src} fill objectFit='cover' alt={props.image.alt} />
            </div>
        </div>
    </div>
  )
}

export default HowItWorksCard