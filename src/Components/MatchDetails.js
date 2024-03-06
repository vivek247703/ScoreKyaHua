import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Commentry } from './Commentry';
import {useDispatch, useSelector} from "react-redux";
import { addMessage } from '../Utils/MatchDetailsSclicer';
import { Shimmer } from './Shimmer';

export const MatchDetails=()=> {
  const [Live, setLive]=useState([]);
  const [searchParams] = useSearchParams();
  const [show, setshow]= useState(false);
  const dispatch = useDispatch();
  const Livedata = useSelector((store)=>store.Runs.messages);
  
  
  useEffect(() => {
    const i = setInterval(() => {
      getLiveMatchData();
    }, 60000);
    return ()=> clearInterval(i);
},[Live])

const getLiveMatchData = async () => {
  const data = await fetch("https://cricbuzz-live.vercel.app/v1/score/"+searchParams.get("i")+"");
  const json = await data.json();
  const arrayOfValues = Object.keys(json).map(key => json[key]);
  console.log(arrayOfValues);
  setLive(arrayOfValues);
  setshow(true);
};
if(Live===null) return <Shimmer />; 

  return (
    <div>
        {show && 
      Live.map((e,i)=>(
        <Commentry key={i} data={e}/>
      ))
    }
    </div>
    
  )
}
