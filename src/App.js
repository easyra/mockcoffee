import React, { useState, useEffect } from 'react';
import './App.scss';
import LandingPage from './components/LandingPage';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import StreamContainer from './components/StreamContainer';
import NavBarMobile from './components/NavBarMobile';
import Page404 from './components/Page404';
import LoginModal from './components/LoginModal/LoginModal';
import { auth } from './firebase';
import AccountPage from './components/AccountPage';
function App() {
  const [navbarModel, setNavModel] = useState(false);
  const [LoginModalOpen, setLoginModal] = useState(false);

  const toggleNavModel = () => {
    setNavModel(!navbarModel);
  };

  return (
    <div
      className={`App ${
        navbarModel || LoginModalOpen ? 'hide-overflow-y' : ''
      }`}
    >
      <NavBarMobile navbarModel={navbarModel} />
      {LoginModalOpen && (
        <LoginModal
          setLoginModal={setLoginModal}
          LoginModalOpen={LoginModalOpen}
        />
      )}
      <Route
        path='/'
        render={props => (
          <NavBar
            setLoginModal={setLoginModal}
            toggleNavModel={toggleNavModel}
            navbarModel={navbarModel}
            {...props}
          />
        )}
      />
      <Switch>
        <Route strict exact path='/' component={LandingPage} />
        <Route strict exact path='/stream' component={StreamContainer} />
        <Route strict exact path='/account' component={AccountPage} />
        <Route path='/' component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
