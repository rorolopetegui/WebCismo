import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
const HomeComponent = props => {
  //const { children } = props;
  return (
    <div  onClick={() => (location.href = '/test')}>
      Hello World
    </div>
  );
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
  children: PropTypes.node,
};

export default HomeComponent;
