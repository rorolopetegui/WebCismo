import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/* eslint-disable global-require */
const HeaderBanner = props => {
    const { classes, text } = props;
    return (
        <div style={classes.container} className="backgroundPattern">
           <span style={classes.sectionTitle}>{text}</span>
        </div>
    );
};
/* eslint-enable global-require */
HeaderBanner.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};

export default HeaderBanner;
