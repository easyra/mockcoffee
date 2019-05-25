import React, { useState, useEffect } from 'react';
import './App.scss';
import LandingPage from './components/LandingPage';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import StreamContainer from './components/StreamContainer';
import NavBarMobile from './components/NavBarMobile';
import Page404 from './components/Page404';
import LoginModal from './components/LoginModal/LoginModal';
import { auth, firestore } from './firebase';
import AccountPage from './components/AccountPage';

export const LoggedIn = React.createContext();

function App() {
  const [navbarModel, setNavModel] = useState(false);
  const [LoginModalOpen, setLoginModal] = useState(false);

  const toggleNavModel = () => {
    setNavModel(!navbarModel);
  };

  const [isLoggedIn, setLoginStatus] = useState(false);
  useEffect(() => {
    let didCancel = false;
    auth.onAuthStateChanged(async user => {
      if (user) {
        firestore
          .collection('/users')
          .doc(user.uid)
          .get()
          .then(doc => {
            if (didCancel) {
              if (doc.exists) {
                setLoginStatus(true);
              } else {
                setLoginStatus(false);
              }
            }
          });
      } else {
        if (didCancel) {
          setLoginStatus(false);
        }
      }
    });
    return () => {
      didCancel = true;
    };
  });

  return (
    <LoggedIn.Provider value={{ isLoggedIn, setLoginModal }}>
      <div
        className={`App ${
          navbarModel || LoginModalOpen ? 'hide-overflow-y' : ''
        }`}
      >
        <NavBarMobile navbarModel={navbarModel} />
        <LoginModal
          setLoginModal={setLoginModal}
          LoginModalOpen={LoginModalOpen}
        />
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
    </LoggedIn.Provider>
  );
}

export default App;
