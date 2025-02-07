import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import USA from './USA'
import Islamabad from './Islamabad'
import Australia from './Australia'
import Canada from './Canada'
import Footer from './Footer'

function App() {
  

  return (
    <>
      <h1 style={{textAlign: 'center', color: '#1d3663', fontSize: '43px', fontFamily: 'sans-serif', animation:'fadeIn 2s'}}>CLICK ON THE BUTTON TO SEE THE CITY'S CURRENT TIME</h1>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', gap:'70px'}}>
      <button onClick={<Islamabad/>}>Islamabad</button>
      <button onClick={<Australia/>}>Australia</button>
      <button onClick={<USA/>}>USA</button>
      <button onClick={<Canada/>}>Canada</button>
      </div>
      {/*<Footer/>*/}
    </>
  )
}

export default App
