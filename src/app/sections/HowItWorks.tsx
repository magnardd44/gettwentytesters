import React from 'react'
import Title from '../components/Title'
import HowItWorksCard from '../components/HowItWorksCard'

import { ImageProps} from "next/image"

import image1 from '../../../public/1.png'
import image2 from '../../../public/2.png'
import image3 from '../../../public/3.png'
import image4 from '../../../public/4.png'

function HowItWorks() {

    const images: ImageProps[] = [
        {src: image1, alt: "Image1"},
        {src: image2, alt: "Image2"},
        {src: image3, alt: "Image3"},
        {src: image4, alt: "Image4"},
    ]


  return (
    <div id='howItWorks' className='w-full bg-default_blue'>
        <Title text={"How it works"}/>
        <div className='flex justify-center items-center flex-col py-20 '>
            <HowItWorksCard title='Develop and upload your app to the Google Play Console' text={<p>This is simply what you do before you contact us. During this step you develop your app or game, and make sure everything is working as intended. Finally, you upload the app or game to the Google Play Console in order to be able to distribute the app for testing.</p>} image={images[0]}/>
            <HowItWorksCard title='Buy third party testing from us' text={<p>Buy our Google Play Store package to get us started on the testing phase, and get one step closer of getting approved for global distribution of your app.</p>} image={images[1]}/>
            <HowItWorksCard title="Add testers and let us handle the testing phase" text={<p>You will receive a list of email addresses connected to our tester accounts. Add them to your app's closed testing group in Google Play Console. But don&apos;t worry, will provide clear instructions to make this as seamless as possible.</p>} image={images[2]}/>
            <HowItWorksCard title='Publish your app' text={<p>We will let you know when we have finished testing the app. Google requires a minimum of 14 days of testing, so that is how long it will take. Also, we offer publishing guarantee, meaning we guarantee that the app will be approved for Google Play Store after going through testing with</p>} image={images[3]}/>

        </div>
    </div>  )
}

export default HowItWorks