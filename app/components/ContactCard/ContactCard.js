import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable global-require */
class ContactCard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={classes.containerVideo}>
                <div style={classes.overlayVideo}></div>
                <video style={classes.backgroundVideo} loop autoPlay muted>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                    <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <span style={classes.title}>We believe in bringing the best solution to our clients</span>
                <span style={classes.subtitle}>We're a top tech company, that loves to bring the best practices and solutions to our clients, so we both can growth together. We build the best for our customers.<br/>Many of our long-term partnerships start with a website & grow through ongoing SEO & Google Ads or with particular projects that we propose.</span>
                <span style={classes.contact}>contact us - (+598) 9846 9728 or email us: info@cismosolutions.com</span>
            </div>
        );
    }
}
/* eslint-enable global-require */
ContactCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ContactCard;
