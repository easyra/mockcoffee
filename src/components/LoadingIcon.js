import React from 'react';

const LoadingIcon = ({ color }) => {
  return (
    <div class='loading-icon'>
      <i class={`fas fa-circle-notch fa-spin fa-3x color${color}`} />
    </div>
  );
};

export default LoadingIcon;
