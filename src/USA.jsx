import react from 'react';
import {useState, useEffect} from 'react';

function USA(){

    const [usaTime,setUsaTime]=useState(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}))

    useEffect(()=>{
        const timer=setInterval(()=>{
            setUsaTime(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}))
        },1000

        )
        return ()=>clearInterval(timer)
    }


    )
    return (
        <>
        <h1>USA</h1>
        <h2 style={{fontFamily:'arbitron',fontSize:'40px'}}>{usaTime}</h2>
        </>
    )
}

export default USA;