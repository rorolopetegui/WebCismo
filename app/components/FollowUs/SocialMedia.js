import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable global-require */
class SocialMedia extends Component {
    state = {
        hover: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };

    render() {
        const { classes, link, icon } = this.props;
        const { hover } = this.state;
        return (
            <a
                style={classes.container}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
                href={link}
                target="_blank"
                className={"radioButton" + (!hover ? "" : " selected")}
            >
                <div className="center">
                    <FontAwesomeIcon
                        style={classes.socialMediaIcon}
                        icon={icon}
                        size="3x"
                    />
                </div>
            </a>
        );
    }
}
/* eslint-enable global-require */
SocialMedia.propTypes = {
    icon: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
};

export default SocialMedia;
