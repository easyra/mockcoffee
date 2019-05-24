import React from 'react';

const Schedule = ({ twitchFollowers }) => {
  return (
    <div className='schedule'>
      <h2>Followers</h2>
      <ul>
        {twitchFollowers.map(({ from_name }) => (
          <l1>{from_name}</l1>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
