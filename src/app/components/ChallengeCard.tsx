import React from 'react'

function ChallengeCard(props: {title: string, text: string}) {
  return (
    <div className='flex font-bold flex-row w-[80%] pl-20 py-14 rounded-3xl bg-cardBg  my-5'>
        <div className='text-2xl text-cardText w-3/4 pl-10 pr-20 flex justify-start items-center'>{props.text}</div>
        <div className='text-4xl text-cardTitle w-1/4 flex justify-start items-center '>{props.title}</div>
    
    </div>
  )
}

export default ChallengeCard