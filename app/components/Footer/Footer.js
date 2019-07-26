import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import MediaButton from '../MenuComps/MediaButton';
import ContactData from '../Forms/ContactData';

/* eslint-disable global-require */
const Footer = props => {
  const { classes, engLang } = props;
  return (
    <div style={classes.body}>
      <div style={classes.footerHeader}>
        <div style={classes.footerHeader.containerInfo}>
          <MediaButton
            classes={classes.footerHeader.containerIcon}
            link="https://www.facebook.com/CismoSolutions/"
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
            link="https://www.linkedin.com/company/35549752"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size={classes.footerHeader.containerIcon.socialMediaIconSize}
            />
          </MediaButton>
        </div>

        <ContactData engLang={engLang} classes={classes.footerHeader.contactData} />
      </div>
      <div style={classes.footerBody.container}>
        <div style={classes.footerBody.backgroundImg}></div>
        <span style={classes.footerBody.copyright}>
          Copyright © 2019 Cismo. All rights reserved.
          <br />Designed by Cismo.
        </span>
      </div>
    </div>
  );
};
/* eslint-enable global-require */
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  engLang: PropTypes.bool.isRequired,
};

export default Footer;
