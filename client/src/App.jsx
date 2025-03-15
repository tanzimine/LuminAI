import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar, Footer } from './components';
import { Home, CreatePost, About, Solutions, CaseStudies } from './pages';
import { LogoGenerator, TaskManager, SeoResearch, IdeasGenerator } from './components';
import secureStorage from './utils/storage';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return secureStorage.get('darkMode', true);
  });

  useEffect(() => {
    secureStorage.set('darkMode', darkMode);
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#ffffff' : '#000000',
      },
      background: {
        default: darkMode ? '#000000' : '#ffffff',
        paper: darkMode ? '#121212' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
      },
      h2: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
      },
      h3: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: darkMode ? '#121212' : '#ffffff',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
              },
              '&:hover fieldset': {
                borderColor: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
              },
              '&.Mui-focused fieldset': {
                borderColor: darkMode ? '#ffffff' : '#000000',
              },
            },
          },
        },
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/create-post" element={<CreatePost darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/solutions" element={<Solutions darkMode={darkMode} />} />
            <Route path="/case-studies" element={<CaseStudies darkMode={darkMode} />} />
            <Route path="/logo-generator" element={<LogoGenerator darkMode={darkMode} />} />
            <Route path="/task-manager" element={<TaskManager darkMode={darkMode} />} />
            <Route path="/seo-research" element={<SeoResearch darkMode={darkMode} />} />
            <Route path="/ideas-generator" element={<IdeasGenerator darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? 'dark' : 'light'}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
