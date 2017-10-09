import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon = {} }) => (
  <div className="icon">
    <div>
      <img src={icon.url} alt={icon.name} />
    </div>
    {icon.name}
  </div>
);

Icon.propTypes = {
  icon: PropTypes.object,
};

export default Icon;
