import React from 'react';
import PropTypes from 'prop-types';
import Separator from '../Separator/Separator';
import ServicesGallery from '../ServicesGallery/ServicesGallery';
import ClientsGallery from '../ClientsGallery/ClientsGallery';
import FollowUs from '../FollowUs/FollowUs';
import FirstContact from '../FirstContact/FirstContact';
import ContactCard from '../ContactCard/ContactCard';
import ClientsContent from '../../content/ClientsContent';
import ClientsTestimonials from '../../content/ClientsTestimonials';
import ServicesContent from '../../content/Services';

//Content
import CardContentEnglish from '../../content/English/CardContentEnglish';
import CardContent from '../../content/CardContent';



/* eslint-disable global-require */
const HomeComponent = props => {
    const { classes } = props;
    return (
        <div>
            <ContactCard content={""} classes={classes.contactCard} />
            <ServicesGallery classes={classes.servicesGallery} content={ServicesContent} />
            <Separator classes={classes.separator} text="Más Servicios" link="/Services" />
            <ClientsGallery classes={classes.clientsGallery} contentClients={ClientsContent} contentTestimonials={ClientsTestimonials} />
            <Separator classes={classes.separator} text="Ver más trabajos" link="/Clients" />
            <FollowUs classes={classes.followUs} />
            <FirstContact classes={classes.firstContact} />
        </div>
    );
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default HomeComponent;
