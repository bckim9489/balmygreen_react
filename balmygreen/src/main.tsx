import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#DBE0E6',  // 그레이
    },
    secondary: {
      main: '#E1E5EA',  // 라이트 그레이
    },
    info: {
      main: '#FF7A50', // 주황
      // main: '#5061ff', // 파랑
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
