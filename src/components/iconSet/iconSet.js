import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon';

const IconSet = ({ name = '', icons = [] }) => (
  <div className="icon-set">
    <p className="set-title">{name}</p>
    {icons.map(icon => <Icon icon={icon} />)}
  </div>
);

IconSet.propTypes = {
  name: PropTypes.string,
  icons: PropTypes.array,
};

export default IconSet;
