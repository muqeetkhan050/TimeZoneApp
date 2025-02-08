import react from 'react';
import {useState, useEffect} from 'react';

function Australia(){
    const [australiaTime, setAustraliaTime]=useState(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}))

    useEffect(()=>{
        const timer=setInterval(()=>{
            setAustraliaTime(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}))
        },1000)
        return ()=>clearInterval(timer)
    })


    return(
        <>
        <h1>Australia</h1>
        <h2 style={{fontFamily:'arbitron',fontSize:'40px'}}>{australiaTime}</h2>
        </>
    )
}

export default Australia;