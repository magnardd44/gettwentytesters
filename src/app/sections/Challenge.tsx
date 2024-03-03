import React from 'react'
import ChallengeCard from '../components/ChallengeCard'
import Title from '../components/Title'

function Challenge() {
  return (
    <div id='challenge' className='w-full '>
    <Title text={"The challenge and the solution"}/>
      <div className='flex justify-center items-center flex-col py-20 '>
          <ChallengeCard title="How it started" text='Starting November 13, 2023, Google now require new apps and games to be tested by at least 20 separate testers for at least 14 days in order to allow publishing on the Play Store.'/>
          <ChallengeCard title="Our take" text='We recognize that it is unrealistic for individuals and small-sized businesses to have access to twenty separate testers.'/>
          <ChallengeCard title="Our solution" text='With GetTwentyTesters.com you outsource the testing process to professionals that will perform the whole testing process for you, making sure you satisfy Google’s requirements.'/>
      </div>
    </div>
  )
}

export default Challenge