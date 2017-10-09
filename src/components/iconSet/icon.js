import React from 'react';
import PropTypes from 'prop-types';

import { getPNGIcon } from '../../utils/searchUtil';

const Icon = ({ icon = {} }) => (
  <div className="icon">
    <div>
      <img src={getPNGIcon(icon.png, 48)} alt={icon.name} />
    </div>
    {icon.name}
  </div>
);

Icon.propTypes = {
  icon: PropTypes.object,
};

export default Icon;
