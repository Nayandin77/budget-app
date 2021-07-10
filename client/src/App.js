// Dependencies
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {


  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
      </Container>
    </BrowserRouter>
  );
};

export default App;
