// import {  } from 'react'
import './App.css';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import { TrackList } from './components';

function App() {
  

  return (
    <MusicPlayerProvider>
      <TrackList />
    </MusicPlayerProvider>
  )
}

export default App
