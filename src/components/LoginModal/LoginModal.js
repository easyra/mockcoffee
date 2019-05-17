import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  GoogleProvider,
  TwitterProvider,
  auth,
  firestore
} from '../../firebase';
import LoginContent from './LoginContent';
import CreateUser from './CreateUser';

const LoginModal = ({ setLoginModal, LoginModalOpen, history }) => {
  const [userExists, setUserExists] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const exitModal = e => {
    if (e.target.classList.contains('login-modal')) {
      setLoginModal(false);
    }
  };
  return (
    <div
      className={`login-modal ${LoginModalOpen ? 'active' : ''}`}
      onClick={exitModal}
    >
      {userExists ? (
        <LoginContent
          setUserExists={setUserExists}
          setLoginModal={setLoginModal}
        />
      ) : (
        <CreateUser
          setLoginModal={setLoginModal}
          setUserExists={setUserExists}
        />
      )}
    </div>
  );
};

export default withRouter(LoginModal);
