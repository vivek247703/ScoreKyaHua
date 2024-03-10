import React from 'react'

export const Commentry=({data})=> {
  
  return (
    
    <div className='m-2'>
      <h1 className='font-bold'>{data[2]?.liveScore.slice(-4)} {data[2]?.bowlerOne} to {data[2]?.batsmanOne}</h1>
    </div>
  )
}
