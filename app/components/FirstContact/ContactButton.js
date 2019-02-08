import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';

/* eslint-disable global-require */
class ContactButton extends Component {
    state = {
        hover: false,
    };

    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };
    render() {
        const { classes, children, link } = this.props;
        const { hover } = this.state;
        return (
            <a
                style={classes.container}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
                href={link}
                className={(hover? "buttonHover" : "button")}
            >
                <span style={classes.innerContent}>{children}</span>
            </a>
        );
    }
}
/* eslint-enable global-require */
ContactButton.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
};

export default ContactButton;
