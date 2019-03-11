import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';
import { isAndroid, isIOS } from 'react-device-detect';

/* eslint-disable global-require */
class ImgButton extends Component {
    state = {
        hover: false,
        displayDesc: false,
        displayDescHidden: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
        this.displayDesc();
    };
    displayDesc = () => {
        if (!this.state.displayDesc) {
            this.setState(state => ({ displayDescHidden: !state.displayDescHidden }));
            setTimeout(() => {
                this.setState(state => ({ displayDesc: !state.displayDesc }));
            }, 100);
        } else {
            this.setState(state => ({ displayDesc: !state.displayDesc }));
            setTimeout(() => {
                this.setState(state => ({ displayDescHidden: !state.displayDescHidden }));
            }, 600);
        }
    };
    render() {
        const { children, classes, backgroundImage, title, description, link, withImgAlt, backgroundImageAlt } = this.props;
        const { hover, displayDesc, displayDescHidden } = this.state;
        const isMobile = (isAndroid || isIOS ? true : false);
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
                    className={isMobile ? (!hover ? "mediaDisplayNone" : "mediaTitleMobile" + (!displayDesc ? "" : " mediaTitleHover"))
                        : ("mediaTitle" + (!hover ? "" : " mediaTitleHover"))}
                    //className={"mediaTitle" + (!hover ? "" : " mediaTitleHover")}
                >
                    {title}
                </h2>
                <span
                    style={classes.mediaDesc}
                    className={isMobile ? (!hover ? "mediaDisplayNone" : "mediaDescMobile" + (!displayDesc ? "" : " mediaDescHover"))
                        : ("mediaDesc" + (!hover ? "" : " mediaDescHover"))}
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
