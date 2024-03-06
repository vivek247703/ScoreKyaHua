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
    }, 25000);
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
    <div>
      {
        Livedata.map((e,i)=>(
          <Commentry key={i} data={e.score}/>
        ))
      }
    </div>
    
  )
}
