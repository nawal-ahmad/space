import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
      <Routes>
            <Route path='/' element={
              <>
                <h1>Home</h1>
              </>
            }>
            </Route>

            <Route path='/crew' element={<Crew />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/technology' element={<Technology />} />

          </Routes>

      </div>
    </Router>
  );
}

export default App;
