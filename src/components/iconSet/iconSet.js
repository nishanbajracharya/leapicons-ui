import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon';

const IconSet = ({ name = '', icons = [] }) => (
  <div className="block">
    <div className="block__heading">{name}</div>
    <ul className="icon-list">
      {icons.map(icon => <Icon icon={icon} />)}
    </ul>
  </div>
);

IconSet.propTypes = {
  name: PropTypes.string,
  icons: PropTypes.array,
};

export default IconSet;
