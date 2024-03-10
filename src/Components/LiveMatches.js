import React, { useEffect, useState } from 'react'
import { ShowMathesCard } from './ShowMathesCard';
import { Shimmer } from './Shimmer';
import { NoMatchesFound } from './NoMatchesFound';
import { Link } from 'react-router-dom';

export const LiveMatches=()=> {


    const [Matches, setMatches]=useState([]);
    const [Domestic, setDomestic]=useState('international');
   
    useEffect(()=>{
        getLiveMatchData();
        //getDomesticMatches();

    },[Domestic])
    

    const getLiveMatchData = async () => {
        const data = await fetch("https://cricbuzz-live.vercel.app/v1/matches/live?type="+Domestic+"");
        const json = await data.json();
        //const items = Object.values(json);
        console.log(json?.data?.matches);
        setMatches(json?.data?.matches);
      };
      const renderMessage = () => {
        if (Matches.length!=0) {
          return (Matches.map((e)=>(
            <Link key={e.id} to={"/score?i="+e.id}>
              <ShowMathesCard  data={e}/>
            </Link>
          )));
            
        } else {
          return <NoMatchesFound/>;
        }
      }
  return (
    <>
    <h1 className='font-bold text-lg text-black m-2'>Live Matches:- </h1>
    <button className='m-2 p-2 bg-black text-white rounded-lg shadow-sm' onClick={()=>setDomestic('international')}>International</button>
    <button className='m-2 p-2 bg-black text-white rounded-lg shadow-sm'  onClick={()=>setDomestic('domestic')}>Domestic</button>
    <button className='m-2 p-2 bg-black text-white rounded-lg shadow-sm'  onClick={()=>setDomestic('women')}>Women</button>
    <button className='m-2 p-2 bg-black text-white rounded-lg shadow-sm'  onClick={()=>setDomestic('league')}>league</button>
    <div className='flex flex-wrap'>
      {
        renderMessage()
      }
    </div>
    </>
    
  )
}
