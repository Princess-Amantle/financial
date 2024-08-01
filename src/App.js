// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import SignIn from './SignIn';
import SignUp from './signup';
import Login from './login'
import Home from './home'
import { MantineProvider } from '@mantine/core';
//import Home from './Home';
//import { AuthProvider, useAuth } from './AuthContext';



function App() {
  return (
     <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      </MantineProvider>
  );
}

export default App;
