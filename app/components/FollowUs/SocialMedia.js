import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
class SocialMedia extends Component {
    render() {
        const { classes, children } = this.props;
        return (
            <div style={classes.container}>
                {children}
            </div>
        );
    }
}
/* eslint-enable global-require */
SocialMedia.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default SocialMedia;
