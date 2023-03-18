// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './layout/NavBar';
import { Container } from '@mui/material';
import AppRouter from './page/Router';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
