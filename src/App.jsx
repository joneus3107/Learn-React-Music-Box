// import {  } from 'react'
import './App.css';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import { MusicBox } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#121212',
    },
    text: {
      primary: '#fff'
    }
  }
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
