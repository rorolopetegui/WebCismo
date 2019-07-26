import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ClientMedia from './ClientMedia';
import './media-animation.css';
import CarouselTestimonials from '../Carousel/CarouselTestimonials';

/* eslint-disable global-require */
class ClientsGallery extends Component {
    render() {
        const { classes, contentClients, contentTestimonials, engLang } = this.props;
        return (
            <div style={classes.container}>
                <div style={classes.titleContainer}>
                    <span style={classes.titleSection}>{engLang ? "Clients" : "Clientes"}</span>
                </div>
                <div style={classes.clientsLogo}>
                    {contentClients.map((item, index) =>
                        <div key={index} style={classes.clientImgContainer}>
                            <img
                                style={classes.clientImg}
                                src={item.backgroundImage}
                                className={"clientImage"}
                            />
                        </div>
                    )}
                </div>
                <div style={classes.clientTestimonials}>
                    <span style={classes.clientTestimonials.title}>Testimonios</span>
                    <div style={classes.clientTestimonials.carouselContainer}>
                        <CarouselTestimonials classes={classes.clientTestimonials.carousel} content={contentTestimonials} />
                    </div>
                </div>
            </div>
        );
    }
}
/* eslint-enable global-require */
ClientsGallery.propTypes = {
    classes: PropTypes.object.isRequired,
    contentClients: PropTypes.array.isRequired,
    contentTestimonials: PropTypes.array.isRequired,
    engLang: PropTypes.bool.isRequired
};

export default ClientsGallery;
