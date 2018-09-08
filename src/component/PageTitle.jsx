import React from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
  fontFamily: 'Josefin Slab, cursive',
  textAlign: 'center',
  fontSize: '2em',
  paddingTop: '1.5rem',
  paddingRight: '0.5rem',
  paddingLeft: '0.5rem',
  textTransform: 'uppercase',
};
const PageTitle = ({ style, children }) => (
  <h2
    style={{
      ...titleStyle,
      ...(style || {}),
    }}
  >
    {children}
  </h2>
);

PageTitle.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
};

PageTitle.defaultProps = {
  style: {},
  children: null,
};


export default PageTitle;
