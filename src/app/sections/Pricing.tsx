import React from 'react'
import Title from '../components/Title'
import PricingCard from '../components/PricingCard'

function Pricing() {
  return (
    <div id='pricing' className='w-full bg-white pb-20'>
        <Title text="Pricing"/>
        <div className='flex justify-center items-center flex-col py-20 '>
            <div className='w-[80%]'>
            <p className='font-bold text-2xl'>We currently offer only one plan, perfectly designed to meet the new Google Play Store testing requirements. However, feel free to reach out through the contact form if you have other requirements that we can discuss.</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <PricingCard/>
        </div>
    </div>
  )
}

export default Pricing