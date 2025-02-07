import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import USA from './USA'
import Islamabad from './Islamabad'
import Australia from './Australia'
import Canada from './Canada'

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#1d3663', fontSize: '43px', fontFamily: 'sans-serif', animation: 'fadeIn 2s' }}>
        CLICK ON THE BUTTON TO SEE THE CITY'S CURRENT TIME
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '70px' }}>
        <button onClick={() => navigate('/islamabad')}>Islamabad</button>
        <button onClick={() => navigate('/australia')}>Australia</button>
        <button onClick={() => navigate('/usa')}>USA</button>
        <button onClick={() => navigate('/canada')}>Canada</button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/islamabad" element={<Islamabad />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/canada" element={<Canada />} />
      </Routes>
    </>
  );
}

export default App;
