import react from 'react';
import {useState, useEffect} from 'react';  

function Canada(){
    const [canadaTime,setCanadaTime]=useState(new Date().toLocaleString('en-US',{timeZone:'America/Toronto'}))

    useEffect(()=>{
        const timer=setInterval(()=>{
                setCanadaTime(new Date().toLocaleString('en-US',{timeZone:'America/Toronto'}))
        },1000)
        return ()=>clearInterval(timer)
    }


    )

    return(
        <>
        <h1>Canada</h1> 
        <h2 style={{fontFamily:'arbitron',fontSize:'40px'}}>{canadaTime}</h2>
        </>



    )
}

export default Canada;