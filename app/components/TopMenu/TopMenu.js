import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuComps/MenuButton';
import { LocationOn, Phone, Email } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

/* eslint-disable global-require */
class TopMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={classes.body}>
        <div style={classes.menuHeader}>
          <div >
            <div style={classes.menuHeader.containerInfo}>
              <LocationOn style={classes.menuHeader.containerIcon} />
              Tiburcio Gómez 1331 of. 109, Montevideo, Uruguay
            </div>
            <div style={classes.menuHeader.containerInfo}>
              <Phone style={classes.menuHeader.containerIcon} />
              (+598) 9846 9728
            </div>
            <div style={classes.menuHeader.containerInfo}>
              <Email style={classes.menuHeader.containerIcon} />
              info@cismosolutions.com
            </div>
            <div style={classes.menuHeader.containerInfo}>
              <a href='#'>
                <FontAwesomeIcon style={classes.menuHeader.socialMediaIcon} icon={faFacebookSquare} size={classes.menuHeader.socialMediaIconSize}/>
              </a>
              <a href='#'>
                <FontAwesomeIcon style={classes.menuHeader.socialMediaIcon} icon={faLinkedin} size={classes.menuHeader.socialMediaIconSize}/>
              </a>
              <a href='#'>
                <FontAwesomeIcon style={classes.menuHeader.socialMediaIcon} icon={faTwitterSquare} size={classes.menuHeader.socialMediaIconSize}/>
              </a>
            </div>
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
  }
}
/* eslint-enable global-require */
TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default TopMenu;
