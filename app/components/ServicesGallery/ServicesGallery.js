import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServiceMedia from './ServiceMedia';

/* eslint-disable global-require */
class ServicesGallery extends Component {
    render() {
        const { classes, content } = this.props;
        return (
            <div style={classes.container}>
                <div style={classes.titleContainer}>
                    <span style={classes.titleSection}>Servicios</span>
                </div>
                {content.map((item, index) =>
                    <div key={index}>
                        <ServiceMedia
                            classes={classes.media}
                            title={item.title}
                            description={item.description}
                            backgroundImage={item.backgroundImage}
                            link={item.link}
                            content={item}
                            withImgAlt={false}
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
