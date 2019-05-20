import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NavRouter from './components/NavRouter';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div >
        <Nav />
        <NavRouter/>
        <Footer />
      </div>
   </Router>    
  );
}

export default App;
