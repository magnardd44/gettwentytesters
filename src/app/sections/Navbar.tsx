import React from 'react'

function Navbar() {
  return (
        <div className="w-full py-10 bg-default_blue flex flex-row justify-evenly font-bold text-2xl">
            <div className=" w-1/5 flex justify-center items-center"> 
                <div className="bg-red px-10 py-5 text-white">Logo</div>
            </div>
            <div className=" w-3/5 flex items-center justify-evenly">
                <a href='#challenge'><p>The challenge</p></a>
                <a href='#howItWorks'><p>How it works</p></a>
                <a href='#pricing' className=""><p className="">Pricing</p></a>
            </div>
            <div className="w-1/5 flex justify-center items-center">
                <button className="px-10 py-2 bg-white border-2 border-red rounded-full">
                    <p>Contact</p>
                </button>
            </div>
        </div>  )
}

export default Navbar