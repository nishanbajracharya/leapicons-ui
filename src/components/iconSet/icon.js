import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon = {} }) => (
  <span className="icon">
    <p>
      <i className="material-icons">{icon.name}</i>
    </p>
    {icon.name}
  </span>
);

Icon.propTypes = {
  icon: PropTypes.object,
};

export default Icon;
