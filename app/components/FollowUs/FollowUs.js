import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialMedia from './SocialMedia';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

/* eslint-disable global-require */
class FollowUs extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={classes.container}>
                <span style={classes.title}>Follow us</span>
                <span style={classes.subtitle}>In all of our <span style={classes.subtitleAlt}>social networks</span></span>
                <div style={classes.sectionButtons}>
                    <div style={classes.containerButtons}>
                        <SocialMedia classes={classes.socialMediaButtonLeft} link={"https://www.facebook.com/CISMO-Soluciones-Tecnol%C3%B3gicas-331460667360427/"} icon={faFacebookF} />
                        <SocialMedia classes={classes.socialMediaButtonCenter} link={"https://twitter.com/cismosolutions1"} icon={faTwitter} />
                        <SocialMedia classes={classes.socialMediaButtonRight} link={"https://www.linkedin.com/company/35549752"} icon={faLinkedinIn} />
                    </div>
                </div>
            </div>
        );
    }
}
/* eslint-enable global-require */
FollowUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default FollowUs;
