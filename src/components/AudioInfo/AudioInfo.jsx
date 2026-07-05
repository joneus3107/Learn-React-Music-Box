import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import DUMMYIMAGE from '../../assets/dummy.png';

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
		height: '100%',
		objectFit: 'cover',
  },
});

function AudioInfo() {
	const { currentTrackName, currentTrackThumb } = useMusicPlayer();

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
			<CoverImage>
				<img
					alt={currentTrackName || "---"}
					src={currentTrackThumb || DUMMYIMAGE}
				/>
			</CoverImage>
			<Box sx={{ ml: 1.5, minWidth: 0 }}>
				<Typography noWrap>
					<b>{currentTrackName || "---"}</b>
				</Typography>
			</Box>
		</Box>
	)
}

export default AudioInfo
