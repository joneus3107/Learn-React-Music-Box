import React from 'react';
import { MusicPlayerContext } from '../../contexts/MusicPlayerContext';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TinyText = styled(Typography)({
	fontSize: '0.75rem',
	opacity: 0.38,
	fontWeight: 500,
	letterSpacing: 0.2,
});

function MusicSlider() {
	const {state} = React.useContext(MusicPlayerContext);
	const [position, setPosition] = React.useState(0);
	const [prevTrackIndex, setPrevTrackIndex] = React.useState(state.currentTrackIndex);

	function formatDuration(value) {
		const minute = Math.floor(value / 60);
		const secondLeft = Math.floor(value - minute * 60);
		return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
	}

	if (state.currentTrackIndex !== prevTrackIndex) {
    setPrevTrackIndex(state.currentTrackIndex);
    setPosition(0);
  }

	React.useEffect(() => {
		let countPosition;
		if(state.duration > 0 && state.isPlaying) {
			countPosition = setInterval(() => {
				setPosition((prev) => {
					if (prev >= state.duration) {
						clearInterval(countPosition);
						return prev;
					}
					return prev + 1;
				});
			}, 1000);
		} 
		
		return () => {
			clearInterval(countPosition);
		}
	}, [state.duration, state.isPlaying])

	const changePosition = newPosition => {
		state.audioPlayer.currentTime = newPosition;
		setPosition(newPosition)
	}

	return (
		<>
			<Slider
				aria-label="time-indicator"
				size="small"
				value={position}
				min={0}
				step={1}
				max={state.duration}
				onChange={(_, value) => changePosition(value)}
				sx={() => ({
					color: 'primary.main',
					height: 4,
					mt: 1,
					'& .MuiSlider-thumb': {
						width: 8,
						height: 8,
						transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
						'&::before': {
							boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
						},
						'&.Mui-active': {
							width: 20,
							height: 20,
						},
					},
					'& .MuiSlider-rail': {
						opacity: 0.28,
					},
				})}
			/>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					mt: -1,
				}}
			>
				<TinyText>{formatDuration(position)}</TinyText>
				<TinyText>-{formatDuration(state.duration - position)}</TinyText>
			</Box>
		</>
	)
}

export default MusicSlider
