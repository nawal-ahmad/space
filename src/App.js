import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import NotFound from './pages/NotFound';
class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element=<Navigate to="/home" /> />
                    <Route path='/home' element={<Home />} />
                    <Route path='/destinations' element={<Destination />} />
                    <Route path='/crew' element={<Crew />} />
                    <Route path='/technology' element={<Technology />} />
                    <Route path='*' element={< NotFound />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
