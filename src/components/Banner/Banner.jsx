import React from 'react'

const Banner = ({title , bgImage}) => {
  return (  
    <div className=' h-[50vh] mt-24 flex justify-center items-center bg-center bg-cover relative'
    style={{backgroundImage : `url(${bgImage})`}}
    >
      <h2 className='text-5xl font-bold text-zinc-800 bg-white p-5 rounded-xl z-10'>{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
