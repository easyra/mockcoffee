import React, { useState } from 'react';
import { auth, firestore } from '../../firebase';
import LoadingIcon from '../LoadingIcon';

const CreateUser = ({ setUserExists, setLoginModal }) => {
  const [input, setInput] = useState({ username: '' });
  const [stringLengthError, setStringLengthError] = useState(true);
  const [charactersError, setCharactersError] = useState(true);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = e => {
    const { value, name } = e.target;
    validation(value);
    setInput({ [name]: value });
  };

  const handleSubmit = e => {
    const { username } = input;
    const uid = auth.currentUser.uid;
    if (validation(username)) {
      setIsLoading(true);
      console.log('validated bitch');

      firestore
        .collection('userlist')
        .doc(username.toLowerCase())
        .get()
        .then(async doc => {
          if (doc.exists) {
            console.log('username taken');
            setUsernameTaken(true);
            setIsLoading(false);
          } else {
            await auth.currentUser.updateProfile({
              displayName: username
            });
            const batch = firestore.batch();
            const userRef = firestore.collection('users').doc(uid);
            const userListRef = firestore
              .collection('userlist')
              .doc(username.toLowerCase());
            batch.set(userRef, { role: 'none', username });
            batch.set(userListRef, { uid });
            await batch.commit();
            setUserExists(false);
            setLoginModal(false);
            setIsLoading(false);
          }
        })
        .catch(err => console.log(err));
    }
  };

  const switchAuth = () => {
    auth
      .signOut()
      .then(() => {
        setUserExists(true);
      })
      .catch(err => console.log(err));
  };

  const validation = value => {
    let valid = true;
    if (value.length > 3 && value.length < 21) {
      setStringLengthError(false);
    } else {
      setStringLengthError(true);
      valid = false;
    }
    if (/^\w+$/.test(value)) {
      setCharactersError(false);
    } else {
      setCharactersError(true);
      valid = false;
    }
    return valid;
  };

  return (
    <div className=' content create-user'>
      <h2>Confirm Username</h2>
      <input name='username' value={input.username} onChange={handleChange} />

      <h6 className={`${charactersError && 'err'}`}>
        A-Z 0-9 and underscores only
      </h6>
      <h6 className={`${stringLengthError && 'err'}`}>
        Must contain at least 3 and at most 20 characters
      </h6>
      {usernameTaken && <h6 className='err'>Username Taken</h6>}
      {isLoading ? (
        <LoadingIcon color='1' />
      ) : (
        <div
          className={`btn ${(stringLengthError || charactersError) &&
            'disabled'}`}
          onClick={handleSubmit}
        >
          SUBMIT
        </div>
      )}
      <h6 onClick={switchAuth} className='switch-auth'>
        Choose different Sign In method?
      </h6>
    </div>
  );
};

export default CreateUser;
