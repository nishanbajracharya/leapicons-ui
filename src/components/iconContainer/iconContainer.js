import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconSet from '../iconSet';
import { filteredIconSet } from '../../utils/searchUtil';

const IconContainer = ({ search = {}, iconSet = [] }) => (
  <div className="icon-container">
    {filteredIconSet(iconSet, search.query).map(set => (
      <IconSet name={set.name} icons={set.icons} />
    ))}
  </div>
);

IconContainer.propTypes = {
  search: PropTypes.object,
  iconSet: PropTypes.array,
};

export default connect(state => ({
  search: state.search,
  iconSet: state.iconSet,
}))(IconContainer);
