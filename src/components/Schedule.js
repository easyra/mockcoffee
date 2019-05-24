import React from 'react';

const Schedule = ({ twitchFollowers }) => {
  return (
    <div className='schedule'>
      <h2>Following</h2>
      <ul>
        {twitchFollowers.map(({ to_name }) => (
          <li>{to_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
