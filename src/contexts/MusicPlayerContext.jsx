import React, { useState } from "react";
import Track1 from "../assets/track/track_01.mp3";
import Track2 from "../assets/track/track_02.mp3";
import Track3 from "../assets/track/track_03.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Moment of Peace - MickeysCat",
        file: Track1,
      },
      {
        name: "No Copyright Music",
        file: Track2,
      },
      {
        name: "Gvidon - Medicine",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };