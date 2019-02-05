import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServiceMedia from './ServiceMedia';

/* eslint-disable global-require */
class ServicesGallery extends Component {
    render() {
        const { classes, content } = this.props;
        return (
            <div style={classes.container}>
            <span style={classes.titleSection}>Services</span>
                {content.map((item, index) =>
                    <div key={index}>
                        <ServiceMedia
                            classes={classes.media}
                            title={item.title}
                            description={item.description}
                            backgroundImage={item.backgroundImage}
                            link={item.link}
                            content={item}
                        />
                    </div>
                )}
            </div>
        );
    }
}
/* eslint-enable global-require */
ServicesGallery.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
};

export default ServicesGallery;
