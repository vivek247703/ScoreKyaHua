import React from 'react'

export const ShowMathesCard=({data})=> {
  return (
    <div className='w-72 h-64 border border-black rounded-lg shadow-lg m-2 p-2 cursor-pointer'>
      <h1 className='font-bold'>{data?.title.replace(',','')}</h1>
      <div className='flex my-4'>
      <div>
      {(data?.teams).map((e)=>
           <ul>
            <li className='font-bold'>{e.team}</li>
           </ul>
      )}
      </div>
      <div className='mx-14'> 
      {(data?.teams).map((e)=>
           <ul>
            <li>{e.run}</li>
           </ul>
      )}
      </div>
      </div>
      <ul>
        <li><span>{data?.timeAndPlace.date}</span></li>
        <li><span>{data?.timeAndPlace.place}</span></li>
        <li><span>Result - {data?.overview}</span></li>
      </ul>
    </div>
  )
}
