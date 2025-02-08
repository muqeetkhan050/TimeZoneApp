import react from 'react';
import {useState,useEffect} from 'react';

function Islamabad(){
    const [islamabadTime,setIslamabadTime]=useState(new Date().toLocaleString('en-US', {timeZone:'Asia/Karachi'}))
   useEffect(()=>{
    const timer=setInterval(()=>{
        setIslamabadTime(new Date().toLocaleString('en-US',{timeZone:'Asia/Karachi'}))

    },1000)
    return ()=>clearInterval(timer)
   })

   
    return(
        <div className='islamabad' >
            <h1>Pakistan</h1>
            <h2 style={{fontFamily:'arbitron',fontSize:'40px'}}>{islamabadTime}</h2>
        </div>
    )

}

export default Islamabad;