import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* eslint-disable global-require */
const MenuButton = props => {
    const { classes, text, link } = props;
    return (
        <li style={classes.button}>
            <Link style={classes.link} to={link} >
                {text}
            </Link>
        </li>
    );
};
/* eslint-enable global-require */
MenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default MenuButton;
