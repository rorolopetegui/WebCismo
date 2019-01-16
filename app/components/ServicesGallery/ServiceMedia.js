import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';

/* eslint-disable global-require */
class ServiceMedia extends Component {
    state = {
        hover: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
        console.log("Hover");
    };
    render() {
        const { children, backgroundImage, title, description, link, } = this.props;
        const { hover } = this.state;
        return (
            <div
                className="mediaButton"
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
            >
                <img
                    src={backgroundImage}
                    className={"mediaImage" + (!hover ? "" : " mediaImageHover")}
                />
                <h2
                    className={"mediaTitle" + (!hover ? "" : " mediaTitleHover")}
                >
                    {title}
                </h2>
                <span
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
ServiceMedia.propTypes = {
    classes: PropTypes.object,
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default ServiceMedia;
