

import './App.css'
import { Routes, Route } from 'react-router-dom';
import RoomPage from './components/Room';
import Lobby from './components/Lobby';


function App() {
  return (

    <div className='flex flex-col'>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App
