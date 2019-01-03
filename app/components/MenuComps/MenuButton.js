import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* eslint-disable global-require */
class MenuButton extends Component {
    state = {
        hover: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    }
    render() {
        const { classes, text, link } = this.props;
        const { hover } = this.state;
        return (

            <li style={hover ? classes.buttonHover : classes.button}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
            >
                <Link style={classes.link} to={link} >
                    {text}
                </Link>
            </li>

        );
    }
}
/* eslint-enable global-require */
MenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default MenuButton;
