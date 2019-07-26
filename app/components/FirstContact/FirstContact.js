import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactButton from './ContactButton';
/* eslint-disable global-require */
class FirstContact extends Component {
    render() {
        const { classes, engLang } = this.props;

        return (
            <div style={classes.container}>
                <span style={classes.title}>{engLang ? "Questions?" : "Preguntas?"}</span>
                <span style={classes.subtitle}>{engLang ? "Make the first touch" : "Haz el primer contacto"}</span>
                <ContactButton classes={classes.contactButton} link="https://wa.me/59892308380">{engLang ? "Call us!" : "Llamanos!"}</ContactButton>
            </div>
        );
    }
}
/* eslint-enable global-require */
FirstContact.propTypes = {
    classes: PropTypes.object.isRequired,
    engLang: PropTypes.bool.isRequired
};

export default FirstContact;
