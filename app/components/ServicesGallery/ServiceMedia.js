import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';

/* eslint-disable global-require */
class ServiceMedia extends Component {
    render() {
        const { classes, children, backgroundImage, title, description, link, } = this.props;
        return (
            <div style={classes.container}>
                <div
                    style={{ width:'100%', height: '100%', backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}
                >
                    <h2 style={classes.title} >{title}</h2>
                    <span style={classes.description} >{description}</span>
                    {children}
                </div>
            </div>
        );
    }
}
/* eslint-enable global-require */
ServiceMedia.propTypes = {
    classes: PropTypes.object.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default ServiceMedia;
