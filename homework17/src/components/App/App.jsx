import { useState } from 'react';
import { Typography, ThemeProvider, CssBaseline } from '@mui/material';

import Button from '../Button/Button';
import { lightTheme, darkTheme } from '../Theme/theme';

function App() {
  const [mode, setMode] = useState('light');

  const theme = () => (
    mode === 'light' ? lightTheme : darkTheme
  );

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>{mode === 'light' ? 'Light' : 'Dark'} Theme</Typography>
      <Button onClick={toggleTheme}>Toggle theme</Button>
    </ThemeProvider>
  );
}

export default App;