import Image from 'next/image'
import React from 'react'
import PricingRow from './PricingRow'

function PricingCard() {
  return (
    <div className='w-1/4 py-10 rounded-2xl  text-cardText bg-pricingCard font-bold flex justify-center items-center flex-col text-center drop-shadow-2xl shadow-cardText'>
        <div className='py-5'><p className='text-4xl'>Google Play <br/> Store package</p></div>
        <div className='py-5'><p className='text-3xl'>$69</p></div>
        <div className='py-5 w-full flex justify-center items-center flex-col'>
            <div className='flex justify-start items-start flex-col gap-5'>
                <PricingRow title='20 testers' />
                <PricingRow title='14 days of testing' />
                <PricingRow title='Email list of testers' />
                <PricingRow title='Publishing guarantee' />
            </div>
        </div>
        <div className='pt-10 pb-5 w-full flex justify-center items-center'>
            <button className='bg-gold text-white w-3/4 py-5 rounded-full text-3xl'>Buy</button>
        </div>
    </div>
  )
}

export default PricingCard