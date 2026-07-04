import React from 'react';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TrackList() {
	const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

	return (
		<Box>
			{trackList.map((track, index) => (
				// ( Surprise us with your code here)
				<Box key={index} className="song-title">
					<Typography component="p">{track.name}</Typography>
				</Box>
			))}
		</Box>
	);
}

export default TrackList
