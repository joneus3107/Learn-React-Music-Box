import React from 'react';
import useMusicPlayer from '../../hooks/useMusicPlayer';

function TrackList() {
	const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

	return (
		<>
			{trackList.map((track, index) => (
				// ( Surprise us with your code here)
				<div key={index} className="song-title">{track.name}</div>
			))}
		</>
	);
}

export default TrackList
