import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactButton from './ContactButton';
/* eslint-disable global-require */
class FirstContact extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div style={classes.container}>
                <span style={classes.title}>Questions?</span>
                <span style={classes.subtitle}>Make your first contact</span>
                <ContactButton classes={classes.contactButton} link="mailto:info@cismosolutions.com">Contact us!</ContactButton>
            </div>
        );
    }
}
/* eslint-enable global-require */
FirstContact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default FirstContact;
