import React, { useState } from 'react';
import './App.scss';
import LandingPage from './components/LandingPage';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import StreamContainer from './components/StreamContainer';
import NavBarMobile from './components/NavBarMobile';

function App() {
  const [navbarModel, setNavModel] = useState(false);
  const toggleNavModel = () => {
    setNavModel(!navbarModel);
  };
  return (
    <div className={`App ${navbarModel ? 'hide-overflow-y' : ''}`}>
      <NavBarMobile navbarModel={navbarModel} />
      <Route
        path='/'
        render={props => (
          <NavBar
            toggleNavModel={toggleNavModel}
            navbarModel={navbarModel}
            {...props}
          />
        )}
      />
      <Route strict exact path='/' component={LandingPage} />
      <Route strict exact path='/stream' component={StreamContainer} />
    </div>
  );
}

export default App;
