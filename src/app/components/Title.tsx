import React from 'react'

function Title(props: {text: string}) {
  return (
    <div className='pt-10 pl-20'>
        <p className='font-bold text-red text-6xl'>{props.text}</p>
    </div>  )
}

export default Title