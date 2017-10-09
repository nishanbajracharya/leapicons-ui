import React from 'react';
import PropTypes from 'prop-types';

const IconSet = ({ name = '', icons = [] }) => (
  <div className="icon-set">
    <p className="set-title">{name}</p>
    {icons.map(icon => (
      <span className="icon">
        <p>
          <i className="material-icons">{icon}</i>
        </p>
        {icon}
      </span>
    ))}
  </div>
);

IconSet.propTypes = {
  name: PropTypes.string,
  icons: PropTypes.array,
};

export default IconSet;
