import React, { useEffect, useState } from 'react'
import { ShowMathesCard } from './ShowMathesCard';

export const UpcomingMatches=()=> {


    const [Matches, setMatches]=useState([]);
    const [Domestic, setDomestic]=useState('international');

    useEffect(()=>{
        getLiveMatchData();
        //getDomesticMatches();

    },[Domestic])


    const getLiveMatchData = async () => {
        const data = await fetch("https://cricbuzz-live.vercel.app/v1/matches/upcoming?type="+Domestic+"");
        const json = await data.json();
        //const items = Object.values(json);
        console.log(json?.data?.matches);
        setMatches(json?.data?.matches);
      };
  return (
    <>
    <h1 className='font-bold text-lg text-black m-2'>Upcoming Matches:- </h1>
    <button className='m-2 p-2 bg-black text-white rounded-lg shadow-sm' onClick={()=>setDomestic('international')}>International</button>
    <button className='m-2 p-2 bg-black text-white rounded-lg shadow-sm'  onClick={()=>setDomestic('domestic')}>Domestic</button>
    <div className='flex flex-wrap'>
      {
          Matches.map((e)=>(
            <ShowMathesCard KEY={e.id} data={e}/>
          ))
      }
    </div>
    </>
    
  )
}
