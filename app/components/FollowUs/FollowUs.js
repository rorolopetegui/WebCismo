import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

/* eslint-disable global-require */
class FollowUs extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={classes.container}>
                <span style={classes.title}>Follow us</span>
                <span style={classes.subtitle}>In all of our social networks</span>
                <SocialMedia classes={classes.socialMediaButton} >
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        size="3x"
                    />
                </SocialMedia>
                <SocialMedia classes={classes.socialMediaButton} >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        size="3x"
                    />
                </SocialMedia>
            </div>
        );
    }
}
/* eslint-enable global-require */
FollowUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default FollowUs;
