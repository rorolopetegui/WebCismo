import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import MediaButton from '../MenuComps/MediaButton';
import Contact from '../Forms/Contact';
import ContactData from '../Forms/ContactData';

/* eslint-disable global-require */
const Footer = props => {
  const { classes } = props;
  return (
    <div style={classes.body}>
      <div style={classes.footerHeader}>
        <div style={classes.footerHeader.containerInfo}>
          <MediaButton
            classes={classes.footerHeader.containerIcon}
            link="https://www.facebook.com/CISMO-Soluciones-Tecnol%C3%B3gicas-331460667360427/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              size={classes.footerHeader.containerIcon.socialMediaIconSize}
            />
          </MediaButton>
          <MediaButton
            classes={classes.footerHeader.containerIcon}
            link="https://twitter.com/cismosolutions1"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size={classes.footerHeader.containerIcon.socialMediaIconSize}
            />
          </MediaButton>
          <MediaButton
            classes={classes.footerHeader.containerIcon}
            link="https://www.linkedin.com/company/cismo/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size={classes.footerHeader.containerIcon.socialMediaIconSize}
            />
          </MediaButton>
        </div>
      </div>
      <div style={classes.footerBody}>
        <div style={classes.footerBody.container}>
          <ContactData classes={classes.footerBody.contactData} />
          <Contact classes={classes.footerBody.contact} />
        </div>
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
