import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon = '' }) => (
  <span className="icon">
    <p>
      <i className="material-icons">{icon}</i>
    </p>
    {icon}
  </span>
);

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
