import React from 'react';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const btnStyle = {
	justifyContent: "flex-start",
	width: "100%",
	boxSizing: "border-box",
	textAlign: "left",
	color: "primary.main",
	"& .MuiTouchRipple-ripple": {
    color: "secondary.main",
  }
}

function TrackList() {
	const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

	return (
		<Box>
			{trackList.map((track, index) => (
				// ( Surprise us with your code here)
				<Box key={index}><Button onClick={() => playTrack(index)} sx={btnStyle} startIcon={<PlayCircleIcon />}>{track.name}</Button></Box>
			))}
		</Box>
	);
}

export default TrackList
