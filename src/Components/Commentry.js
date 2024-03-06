import React from 'react'

export const Commentry=({data})=> {
  return (
    <div>
      <div className="flex justify-center bg-slate-100">
          <h4 className="text-black font-bold justify-center">{data[2]}</h4><div className='flex'>
            <div className='my-2'>
              <ul>
                <li><span className='font-bold'>Batter</span></li>
                <li><span>{data[4]}  {data[5]}{data[6]}</span></li>
                <li><span>{data[8]}  {data[9]}{data[10]}</span></li>
              </ul>
            </div>
            <div className='mx-52 my-2'>
              <ul>
                <li><span className='font-bold'>Bowler</span></li>
                <li><span>{data[12]}  {data[14]}/{data[15]}</span></li>
              </ul>
            </div>
          </div>
    </div>
    </div>
  )
}
