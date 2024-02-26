import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main : '#DBE0E6',
    },
    secondary: {
      main: '#E1E5EA'
    },
    info: {
      main: '#000000'
    },
    background :{
      default : '#E1E5EA'
    }
  },
  components: {
    MuiCssBaseline: {
        styleOverrides: {
            "*": {
                boxSizing: "border-box",
                margin: 0,
                padding: 0
            },
            html: {
                height: "100%",
                width: "100%"
            },
            body: {
                height: "100%",
                width: "100%"
            },
            "#root": {
                height: "100%",
                width: "100%"
            }
        }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
