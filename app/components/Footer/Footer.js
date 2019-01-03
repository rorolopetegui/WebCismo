import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
const Footer = props => {
  const { classes } = props;
  return (
    <div style={classes.body}>
      <div style={classes.footerHeader}>
        TopFooter
      </div>
      <div style={classes.footerBody}>
       Footer Body
      </div>
    </div>
  );
};
/* eslint-enable global-require */
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Footer;
