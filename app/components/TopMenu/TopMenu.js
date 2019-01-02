import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuComps/MenuButton'

/* eslint-disable global-require */
const TopMenu = props => {
  const { classes } = props;
  return (
    <div style={classes.body}>
      HOLA
      <ul style={classes.menu}>
        <MenuButton classes={classes.menuButton} text="Home" link="/" />
        <MenuButton classes={classes.menuButton} text="Company" link="/test" />
        <MenuButton classes={classes.menuButton} text="Services" link="/" />
      </ul>
    </div>
  );
};
/* eslint-enable global-require */
TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default TopMenu;
