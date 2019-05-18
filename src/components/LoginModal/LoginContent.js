import React, { useState } from 'react';
import LoadingIcon from '../LoadingIcon';
import {
  GoogleProvider,
  TwitterProvider,
  auth,
  firestore
} from '../../firebase';

const LoginContent = ({ setLoginModal, setUserExists }) => {
  const [isLoading, setIsLoading] = useState(false);
  const GoogleLogin = () => {
    setIsLoading(true);
    auth
      .signInWithPopup(GoogleProvider)
      .then(result => {
        const user = result.user;
        const userDoc = firestore.collection('users').doc(user.uid);
        userDoc
          .get()
          .then(doc => {
            if (doc.exists) {
              setLoginModal(false);
            } else {
              setLoginModal(true);
              setUserExists(false);
            }
          })
          .catch(err => {
            setIsLoading(false);
          });
      })
      .catch(err => {
        setIsLoading(false);
      });
  };

  return (
    <div className='content'>
      <h2>SignIn Here:</h2>
      <div
        className='btn google animate
      '
        onClick={GoogleLogin}
      >
        <i class='fab fa-google-plus-square' />
        Google
      </div>
      {isLoading && <LoadingIcon color='1' />}
    </div>
  );
};
export default LoginContent;
