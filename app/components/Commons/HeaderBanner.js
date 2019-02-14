import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/* eslint-disable global-require */
const HeaderBanner = props => {
    const { classes, children } = props;
    return (
        <div style={classes.container} className="backgroundPattern">
           <span style={classes.sectionTitle}>{children}</span>
        </div>
    );
};
/* eslint-enable global-require */
HeaderBanner.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default HeaderBanner;
