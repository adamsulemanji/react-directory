import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Tiles from './components/Tiles';
import Contact from './components/Contact';
import Home from './components/Home';
import NavB from './components/NavB';
import Info from './components/Info';
import logo from './logo.svg';
import './stylings/App.css';

import data from './profiles.json';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<><Home /><NavB /><Info /></>} />
          <Route path="/tiles" element={<><Home /><NavB /><Tiles data={data} /></>} />
          <Route path="/contact" element={<><Home /><NavB /><Contact /></>} />
        </Routes>
    </Router>
  );
}

export default App;
