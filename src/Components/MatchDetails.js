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
return Live.length === 0 ? (
  <Shimmer />
) : (
  
    <div className="justify-center bg-slate-100">
    <div className='flex justify-center'>
        <div>
          <ul>
            <li><h4 className="text-black font-bold">{Live[2]?.liveScore}</h4></li>
            <li><span className='font-bold'>Batter</span></li>
            <li><span>{Live[2]?.batsmanOne}  {Live[2]?.batsmanOneRun}{Live[2]?.batsmanOneBall}</span></li>
            <li><span>{Live[2]?.batsmanTwo}  {Live[2]?.batsmanTwoRun}{Live[2]?.batsmanTwoBall}</span></li>
          </ul>
        </div>
        <div className='mx-52 my-7'>
        <ul>
            <li><span className='font-bold'>Bowler</span></li>
            <li><span>{Live[2]?.bowlerOne}  {Live[2]?.bowlerOneRun}/{Live[2]?.bowlerOneWickets}</span></li>
          </ul>
        </div>
    </div>
    </div>
    
  )
}

