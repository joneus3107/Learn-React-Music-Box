// import {  } from 'react'
import './App.css';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import { MusicBox } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d3bbdd',
    },
    secondary: {
      main: '#eadeee',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#d3bbdd'
    }
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-ripple': {
            color: '#eadeee',
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#eadeee14',
          },
        },
      },
    },
  },
});

function App() {
  

  return (
    <MusicPlayerProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}>
          <MusicBox />
        </Container>
      </ThemeProvider>
    </MusicPlayerProvider>
  )
}

export default App
