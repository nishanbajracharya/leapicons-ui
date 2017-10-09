import React from 'react';

const Icon = ({ icon = '' }) => (
  <span className="icon">
    <p>
      <i className="material-icons">{icon}</i>
    </p>
    {icon}
  </span>
);

export default Icon;
