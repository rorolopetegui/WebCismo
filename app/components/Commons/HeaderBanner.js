import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
const HeaderBanner = props => {
    const { classes, children } = props;
    return (
        <div style={classes.container}>
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
