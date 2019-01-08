import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocationOn, Phone, Email } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import MediaButton from '../MenuComps/MediaButton';
import MenuButton from '../MenuComps/MenuButton';

/* eslint-disable global-require */
class TopMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={classes.body}>
        <div style={classes.menuHeader}>
          <div>
            <div style={classes.menuHeader.containerInfo}>
              <MediaButton
                classes={classes.menuHeader.containerIcon}
                link="https://goo.gl/maps/xDWTiFKiaCN2"
                target="_blank"
              >
                <LocationOn style={classes.menuHeader.containerIcon} />
                Tiburcio Gómez 1331 of. 109, Montevideo, Uruguay
              </MediaButton>
            </div>
            <div style={classes.menuHeader.containerInfo}>
              <MediaButton
                classes={classes.menuHeader.containerIcon}
                link="tel:+59898469728"
              >
                <Phone style={classes.menuHeader.containerIcon} />
                (+598) 9846 9728
              </MediaButton>
            </div>
            <div style={classes.menuHeader.containerInfo}>
              <MediaButton
                classes={classes.menuHeader.containerIcon}
                link="mailto:info@cismosolutions.com"
              >
                <Email style={classes.menuHeader.containerIcon} />
                info@cismosolutions.com
              </MediaButton>
            </div>
            <div style={classes.menuHeader.containerInfo}>
              <MediaButton
                classes={classes.menuHeader.containerIcon}
                link="https://www.facebook.com/CISMO-Soluciones-Tecnol%C3%B3gicas-331460667360427/"
                target="_blank"
              >
                <FontAwesomeIcon
                  style={classes.menuHeader.containerIcon.socialMediaIcon}
                  icon={faFacebookSquare}
                  size={classes.menuHeader.containerIcon.socialMediaIconSize}
                />
              </MediaButton>
              <MediaButton
                classes={classes.menuHeader.containerIcon}
                link="https://twitter.com/cismosolutions1"
                target="_blank"
              >
                <FontAwesomeIcon
                  style={classes.menuHeader.containerIcon.socialMediaIcon}
                  icon={faTwitterSquare}
                  size={classes.menuHeader.containerIcon.socialMediaIconSize}
                />
              </MediaButton>
              <MediaButton
                classes={classes.menuHeader.containerIcon}
                link="https://www.linkedin.com/company/cismo/"
                target="_blank"
              >
                <FontAwesomeIcon
                  style={classes.menuHeader.containerIcon.socialMediaIcon}
                  icon={faLinkedin}
                  size={classes.menuHeader.containerIcon.socialMediaIconSize}
                />
              </MediaButton>
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
            <MenuButton classes={classes.menuButton} link="/">
              Home
            </MenuButton>
            <MenuButton classes={classes.menuButton} link="/Company">
              Company
            </MenuButton>
            <MenuButton classes={classes.menuButton} link="/Services">
              Services
            </MenuButton>
            <MenuButton classes={classes.menuButton} link="/Clients">
              Clients
            </MenuButton>
            <MenuButton classes={classes.menuButton} link="/Jobs">
              Jobs
            </MenuButton>
            <MenuButton classes={classes.menuButton} link="/Contact">
              Contact
            </MenuButton>
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
