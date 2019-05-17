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
    auth
      .signInWithPopup(GoogleProvider)
      .then(result => {
        setIsLoading(true);
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
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='content'>
      <div className='btn' onClick={GoogleLogin}>
        Google
      </div>
      {isLoading && <LoadingIcon />}
    </div>
  );
};
export default LoginContent;
