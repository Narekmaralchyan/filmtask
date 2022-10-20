import React,{useContext, useEffect,useRef, useState} from 'react'
import { DataContext } from '../../App';

export default function Background() {
   
    let {CoverImage,VideoUrl} = useContext(DataContext).state.Featured;
    const [isVideo,setIsVideo] = useState(false);
    const videoRef = useRef();
   
    let url = VideoUrl || sessionStorage.getItem("lastUrl")
  useEffect(() => {
    setTimeout(()=>{
      if(url){
        setIsVideo(true);
      }
      videoRef.current?.load()
    },2000)
    if(url){
      sessionStorage.setItem("lastUrl",url)
    }
  },[url]);


  return (
    isVideo? 
            <video  ref={videoRef} autoPlay    className='video'   >
              <source src={url} type="video/mp4"/>
            </video>
        :
            <img className='background' src={'assets/'+CoverImage} />
        
    
  )
}

