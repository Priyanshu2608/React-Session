import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Events from './Components/Events';
import OurTeam from './Components/Ourteam';
import JoinUs from './Components/JoinUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/events' element={<Events />} />
        <Route path='/ourteam' element={<OurTeam />} />
        <Route path='/joinus' element={<JoinUs />} />
      </Routes>
    </Router>
  );
};

export default App;
