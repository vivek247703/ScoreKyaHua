import React from 'react'

export const Commentry=({data})=> {
  
  return (
      <div className="flex justify-center bg-slate-100">
      <h4 className="text-black font-bold">{data?.liveScore}</h4>
              <div className='flex'>
                  <div className='my-2'>
                    <ul>
                      <li><span className='font-bold'>Batter</span></li>
                      <li><span>{data?.batsmanOne}  {data?.batsmanOneRun}{data?.batsmanOneBall}</span></li>
                      <li><span>{data?.batsmanTwo}  {data?.batsmanTwoRun}{data?.batsmanTwoBall}</span></li>
                    </ul>
                  </div>
                  <div className='mx-52 my-2'>
                  <ul>
                      <li><span className='font-bold'>Bowler</span></li>
                      <li><span>{data?.bowlerOne}  {data?.bowlerOneRun}/{data?.bowlerOneWickets}</span></li>
                    </ul>
                  </div>
              </div>
              </div>
  )
}
