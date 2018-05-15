import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconSet from '../iconSet';
import { filteredIconSet } from '../../utils/searchUtil';

const IconContainer = ({ search = {}, icons = {} }) => (
  <div className="full-scope-card">
    {filteredIconSet(icons.set, search.query).map(set => (
      <IconSet name={set.name} icons={set.icons} />
    ))}
  </div>
);

IconContainer.propTypes = {
  icons: PropTypes.object,
  search: PropTypes.object,
};

export default connect(state => ({
  search: state.search,
  icons: state.icons,
}))(IconContainer);
