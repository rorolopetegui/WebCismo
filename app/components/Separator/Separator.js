import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './separator-animation.css';
import { Link } from 'react-router-dom';

/* eslint-disable global-require */
class Separator extends Component {
    state = {
        hover: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };
    render() {
        const { classes, text, link } = this.props;
        const { hover } = this.state;
        return (
            <div className="divContainer">
                <Link
                    style={classes.container}
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseEnter.bind(this)}
                    to={link}
                >
                    <div
                        style={classes.background}
                        className={(!hover ? "background" : " backgroundHover")}
                    ></div>
                    <FontAwesomeIcon
                        style={classes.icon}
                        icon={faArrowRight}
                        size="2x"
                        className={(!hover ? "icon" : " iconHover")}
                    />
                    <span
                        style={classes.text}
                        className={"text"}
                    >
                        {text}
                    </span>
                </Link>
            </div>
        );
    }
}
/* eslint-enable global-require */
Separator.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Separator;
