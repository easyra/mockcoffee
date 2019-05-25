import React, { useState, useEffect } from 'react';
import CTAText from './CTAText';
import Schedule from './Schedule';
import StreamingStatus from './StreamingStatus';
import axios from 'axios';

const CTA = () => {
  const [twitchFollowers, setTwitchFollowers] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const getFollowers = () => {
      const headers = {
        ['Client-ID']: process.env.REACT_APP_CLIENT_ID_TWITCH
      };
      axios
        .get(
          'https://api.twitch.tv/helix/users/follows?from_id=280154778&first=5',
          {
            headers
          }
        )
        .then(({ data }) => {
          if (!didCancel) {
            setTwitchFollowers(data.data);
          }
        })
        .catch(err => console.log(err));
      return () => {
        didCancel = true;
      };
    };
    getFollowers();
  }, []);

  useEffect(() => {
    let didCancel = false;
    const getLiveStatus = () => {
      const headers = {
        ['Client-ID']: process.env.REACT_APP_CLIENT_ID_TWITCH
      };
      axios
        .get('https://api.twitch.tv/helix/streams?user_id=280154778&', {
          headers
        })
        .then(({ data }) => {
          if (!didCancel) {
            if (data.data[0]) {
              setIsLive(true);
            } else {
              setIsLive(false);
            }
          }
        })
        .catch(err => console.log(err));
      getLiveStatus();
    };

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <>
      <div className='cta'>
        <div className='content'>
          <CTAText />
          <div className='info'>
            <Schedule twitchFollowers={twitchFollowers} />
            {isLive && <StreamingStatus />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
