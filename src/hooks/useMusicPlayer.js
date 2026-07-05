import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const {state, setState} = useContext(MusicPlayerContext);
  const currentTrack =
    state.currentTrackIndex !== null
      ? state.tracks[state.currentTrackIndex]
      : null;

  const currentTrackName = currentTrack?.name || "";
  const currentTrackThumb = currentTrack?.thumbnail || "";
  const currentTrackDuration = state.audioPlayer.duration || 0;

  // Play a specific track
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.addEventListener("loadedmetadata", () => {
        setState((prev) => ({ ...prev, duration: state.audioPlayer.duration || 0 }));
      });
      state.audioPlayer.play();
      setState((prev) => ({
        ...prev,
        currentTrackIndex: index,
        isPlaying: true,
        duration: 0, // reset until metadata loads
      }));
    }
  }

  // Toggle play or pause
  function togglePlay() {
    if(currentTrack === null) {
      playTrack(0);
      return;
    }

    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  // Play the previous track in the tracks array
  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  // Play the next track in the tracks array
  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName,
    currentTrackThumb,
    currentTrackDuration,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;