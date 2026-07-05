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
        thumbnail: "https://cdn.pixabay.com/audio/2026/06/19/10-01-07-347_200x200.jpg",
        file: Track1,
      },
      {
        name: "No Copyright Music",
        thumbnail: "https://cdn.pixabay.com/audio/2026/05/21/17-00-18-274_200x200.png",
        file: Track2,
      },
      {
        name: "Gvidon - Medicine",
        thumbnail: "https://cdn.pixabay.com/audio/2025/06/26/05-29-56-305_200x200.png",
        file: Track3,
      },
    ],
    duration: 0,
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