import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Commentry } from './Commentry';
import {useDispatch, useSelector} from "react-redux";
import { addMessage } from '../Utils/MatchDetailsSclicer';

export const MatchDetails=()=> {
  const [Live, setLive]=useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const Livedata = useSelector((store)=>store.Runs.messages);
  

  //const newArray = [1, 2, 3, 4, 5];
 
  useEffect(()=>{
    getLiveMatchData();
    const i = setInterval(() => {
      dispatch(addMessage({
        score : Live,
       }))
    }, 250000);
    return ()=> clearInterval(i);
  
  
},[Livedata])



const getLiveMatchData = async () => {
    const data = await fetch("https://cricbuzz-live.vercel.app/v1/score/"+searchParams.get("i")+"");
    const json = await data.json();
    const arrayOfValues = Object.values(json.data);
    console.log(arrayOfValues);
    //const items = "Felix";
    //const items1 = Object.values(items.title);
    //console.log(items);
    //console.log(json.data);
    /*const items = json.data;
    const arrayFromObject = Object.entries(items).map(([key, value]) => ({
      key: key,
      value: value,
    }));*/
    setLive(arrayOfValues);
    
  };

  
  
  
  
  
  return (
    <div className="flex justify-center bg-slate-100">
      {
        Livedata.map((e)=>(
          <><h4 className="text-black font-bold justify-center">{e.score[2]}</h4><div className='flex'>
            <div className='my-2'>
              <ul>
                <li><span className='font-bold'>Batter</span></li>
                <li><span>{e.score[4]}  {e.score[5]}{e.score[6]}</span></li>
                <li><span>{e.score[8]}  {e.score[9]}{e.score[10]}</span></li>
              </ul>
            </div>
            <div className='mx-52 my-2'>
              <ul>
                <li><span className='font-bold'>Bowler</span></li>
                <li><span>{e.score[12]}  {e.score[14]}/{e.score[15]}</span></li>
              </ul>
            </div>
          </div></>
        ))
      }
    </div>
    
  )
}
