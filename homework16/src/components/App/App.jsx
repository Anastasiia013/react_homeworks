import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Material UI App</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>Добро пожаловать в наше приложение!</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}> Открыть диалоговое окно</Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React-приложение сделанное с использованием Material UI. Вы можете настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            ОК
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
