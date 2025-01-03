import React, { useState,useRef } from 'react';

import './Intro.css';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import {meal} from "../../constants";

const Intro = () => {
  const [playVedio,setPlayVedio] = useState(false);
  const vidRef = useRef();

  const handleVedio = () => {
    setPlayVedio((prevPlayVedio)=> !prevPlayVedio);
    if(playVedio){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }

return (
  <div className='app__vedio'>
    <video type='vedio/mp4' ref={vidRef} loop controls={false} muted>
    <source src={meal}/>
    </video>
    <div className='app__vedio-overlay flex__center'>
      <div className='app__vedio-overlay_circle flex__center' onClick={handleVedio}>
        {
          playVedio? 
          <BsPauseFill color='#fff' fontSize={30}/>
          : <BsFillPlayFill color='#fff' fontSize={30}/>
        }
      </div>
    </div>
  </div>
)
};

export default Intro;
