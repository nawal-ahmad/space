import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, {Component} from 'react';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
class App extends Component {
  render (){
    return (
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element =<Navigate to="/home" /> />
            <Route path='/home' element={<Home />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/destinations' element={<Destination />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='*' element={< NotFound />}/>
          </Routes>
      </Router>
    );  
  }
}

export default App;
