import useMusicPlayer from '../../hooks/useMusicPlayer';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import TrackList from '../TrackList/TrackList';
import MusicSlider from '../MusicSlider/MusicSlider';
import AudioInfo from '../AudioInfo/AudioInfo';



const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'rgba(255,255,255,0.4)',
	color: "primary.main",
  backdropFilter: 'blur(40px)',
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(0,0,0,0.6)',
  }),
}));

export default function MusicBox() {
	const { isPlaying, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', p: 3 }}>
      <Widget>
				<Box>
					<TrackList/>
				</Box>
        <AudioInfo/>
        <MusicSlider />
        <Box
          sx={() => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
            '& svg': {
              color: 'primary.main',
            },
          })}
        >
          <IconButton aria-label="previous song" onClick={() => playPreviousTrack()}>
            <FastRewindRounded fontSize="large" />
          </IconButton>
          <IconButton
            aria-label={!isPlaying ? 'play' : 'pause'}
            onClick={() => togglePlay()}
          >
            {!isPlaying ? (
              <PlayArrowRounded sx={{ fontSize: '3rem' }} />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} />
            )}
          </IconButton>
          <IconButton aria-label="next song" onClick={() => playNextTrack()}>
            <FastForwardRounded fontSize="large" />
          </IconButton>
        </Box>
      </Widget>
    </Box>
  );
}
