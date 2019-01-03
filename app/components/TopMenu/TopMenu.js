import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuComps/MenuButton'

/* eslint-disable global-require */
const TopMenu = props => {
  const { classes } = props;
  return (
    <div style={classes.body}>
      <div style={classes.menuHeader}>
        <div style={classes.menuHeaderContainer}>
          Tiburcio Gómez 1331 of. 109, Montevideo, Uruguay |
        </div>
      </div>
      <div style={classes.menuBody}>
        <img
          src={require(`../../images/CismoLogoText.png`)}
          alt="Cismo Solutions"
          style={classes.menuLogo}
        />
        <ul style={classes.menu}>
          <MenuButton classes={classes.menuButton} text="Home" link="/" />
          <MenuButton classes={classes.menuButton} text="Company" link="/Company" />
          <MenuButton classes={classes.menuButton} text="Services" link="/Services" />
          <MenuButton classes={classes.menuButton} text="Clients" link="/Clients" />
          <MenuButton classes={classes.menuButton} text="Jobs" link="/Jobs" />
          <MenuButton classes={classes.menuButton} text="Contact" link="/Contact" />
        </ul>
      </div>
    </div>
  );
};
/* eslint-enable global-require */
TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default TopMenu;
