import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialMedia from './SocialMedia';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

/* eslint-disable global-require */
class FollowUs extends Component {
    render() {
        const { classes, engLang } = this.props;
        return (
            <div style={classes.container}>
                <span style={classes.title}>{engLang ? "Follow us!" : "Síguenos!"}</span>
                {!engLang &&
                    <span style={classes.subtitle}>En todas nuestras <span style={classes.subtitleAlt}>redes sociales</span></span>
                }
                {engLang &&
                    <span style={classes.subtitle}>In all of our <span style={classes.subtitleAlt}>social media networks</span></span>
                }
                <div style={classes.sectionButtons}>
                    <div style={classes.containerButtons}>
                        <div style={classes.containerButton}>
                            <SocialMedia classes={classes.socialMediaButton} link={"https://www.facebook.com/CismoSolutions/"} icon={faFacebookF} />
                        </div>
                        <div style={classes.containerButton}>
                            <SocialMedia classes={classes.socialMediaButton} link={"https://twitter.com/cismosolutions1"} icon={faTwitter} />
                        </div>
                        <div style={classes.containerButton}>
                            <SocialMedia classes={classes.socialMediaButton} link={"https://www.linkedin.com/company/35549752"} icon={faLinkedinIn} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/* eslint-enable global-require */
FollowUs.propTypes = {
    classes: PropTypes.object.isRequired,
    engLang: PropTypes.bool.isRequired
};

export default FollowUs;
