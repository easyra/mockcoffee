import React from 'react';
import './App.scss';
import LandingPage from './components/LandingPage';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import StreamContainer from './components/StreamContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Route strict exact path='/' component={LandingPage} />
      <Route strict exact path='/stream' component={StreamContainer} />
    </div>
  );
}

export default App;
