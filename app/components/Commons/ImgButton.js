import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';

/* eslint-disable global-require */
class ImgButton extends Component {
    state = {
        hover: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };
    render() {
        const { children, classes, backgroundImage, title, description, link, withImgAlt, backgroundImageAlt } = this.props;
        const { hover } = this.state;
        return (
            <div
                style={classes.mediaButton}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
            >
                <img
                    style={classes.imgMedia}
                    src={withImgAlt ? (hover ? backgroundImage : backgroundImageAlt) : backgroundImage}
                    className={"mediaImage" + (!hover ? "" : " mediaImageHover")}
                />
                <h2
                    style={classes.mediaTitle}
                    className={"mediaTitle" + (!hover ? "" : " mediaTitleHover")}
                >
                    {title}
                </h2>
                <span
                    style={classes.mediaDesc}
                    className={"mediaDesc" + (!hover ? "" : " mediaDescHover")}
                >
                    {description}
                </span>
                {children}

            </div>
        );
    }
}
/* eslint-enable global-require */
ImgButton.propTypes = {
    classes: PropTypes.object.isRequired,
    withImgAlt: PropTypes.bool.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundImageAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default ImgButton;
