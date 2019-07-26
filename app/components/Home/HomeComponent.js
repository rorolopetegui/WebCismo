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
import ClientsTestimonialsEnglish from '../../content/English/ClientsTestimonials';
import ServicesContent from '../../content/Services';
import ServicesContentEnglish from '../../content/English/Services';

/* eslint-disable global-require */
const HomeComponent = props => {
    const { classes, engLang } = props;
    return (
        <div>
            <ContactCard engLang={engLang} classes={classes.contactCard} />
            <ServicesGallery engLang={engLang}  classes={classes.servicesGallery} content={engLang ? ServicesContentEnglish : ServicesContent} />
            <Separator classes={classes.separator} text={engLang ? "More Services" : "Más Servicios"} link="/Services" />
            <ClientsGallery engLang={engLang} classes={classes.clientsGallery} contentClients={ClientsContent} contentTestimonials={engLang ? ClientsTestimonialsEnglish : ClientsTestimonials} />
            <Separator classes={classes.separator} text={engLang ? "More works" : "Ver más trabajos"} link="/Clients" />
            <FollowUs engLang={engLang} classes={classes.followUs} />
            <FirstContact engLang={engLang} classes={classes.firstContact} />
        </div>
    );
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    engLang: PropTypes.bool.isRequired
};

export default HomeComponent;
