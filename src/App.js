import React, { useState } from 'react';
import './App.scss';
import LandingPage from './components/LandingPage';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import StreamContainer from './components/StreamContainer';
import NavBarMobile from './components/NavBarMobile';
import Page404 from './components/Page404';
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
      <Switch>
        <Route strict exact path='/' component={LandingPage} />
        <Route strict exact path='/stream' component={StreamContainer} />
        <Route path='/' component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
