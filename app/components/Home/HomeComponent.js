import React from 'react';
import PropTypes from 'prop-types';
import Separator from '../Separator/Separator';
import ServicesGallery from '../ServicesGallery/ServicesGallery';
import ClientsGallery from '../ClientsGallery/ClientsGallery';
import FollowUs from '../FollowUs/FollowUs';
import FirstContact from '../FirstContact/FirstContact';
import ContactCard from '../ContactCard/ContactCard';

const serviceContent = [
    {
        title: 'Software Personalizado',
        description:
            'Soluciones creativas (Movil, web, Juegos, machine learning AI, AR/VR, Chatbots, Full stack, block chain).',
        backgroundImage: 'https://i.imgur.com/faTkAiQ.png',
        link: '#',
    },
    {
        title: 'Estrategia Digital',
        description:
            'Colaboración Estratégica (Creación de una landing page estratégica, Generación calificada de leads, Estrategia de conversión).',
        backgroundImage: 'https://i.imgur.com/AcYJFtr.png',
        link: '#',
    },
    {
        title: 'Diseño y Desarrollo Web',
        description:
            'Creación y Optimización ( Ui / UX, Ilustraciones, animaciones, frontend, backend).',
        backgroundImage: 'https://i.imgur.com/rv8KeEU.png',
        link: '#',
    },
    {
        title: 'eCommerce',
        description:
            'Creamos tu Tienda virtual.',
        backgroundImage: 'https://i.imgur.com/jIGimk7.png',
        link: '#',
    },
    {
        title: 'Marketing Digital',
        description:
            'Se visible a tu público (Marketing de contenido, SEO / SEM, Marketing de redes sociales, E-mail Marketing).',
        backgroundImage: 'https://i.imgur.com/ka4B4Op.png',
        link: '#',
    },
    {
        title: 'Nuestro Soporte',
        description:
            'Siempre estaremos aquí para ti.',
        backgroundImage: 'https://i.imgur.com/IP4vXoM.png',
        link: '#',
    },
];
const clientsContent = [
    {
        title: 'Salesforce',
        backgroundImage: 'https://i.imgur.com/jfNWTeV.png',
        link: '#',
    },
    {
        title: 'Avesur',
        backgroundImage: 'https://i.imgur.com/w1yXtur.png',
        link: '#',
    },
    {
        title: 'Cutcsa',
        backgroundImage: 'https://i.imgur.com/MNcpPNV.png',
        link: '#',
    },
    {
        title: 'RadioTaxi 141',
        backgroundImage: 'https://i.imgur.com/cul899k.png',
        link: '#',
    },
];
const clientsTestimonials = [
    {
        name: 'Jorge M.',
        profession: 'Sub Gerente General Avesur SRL',
        quote:
            'Cuando nos vimos necesitando una página web, Cismo Solutions se encargó rápidamente en encontrar la mejor página web que refleje lo que nuestra empresa desea comunicar. Me encuentro muy satisfecho con ellos.',
        avatar: 'https://i.imgur.com/n5TMfxY.jpg',
    },
    {
        name: 'CR, Álvaro Santiago',
        profession: 'Sub-Gerente General de Cutcsa',
        quote:
            'Por algunos años han brindado a nuestra Organización sus servicios de realización y programación de aplicaciones internas para mejorar el servicio de nuestra empresa y lo han cumplido en su totalidad demostrando ser una empresa con transparencia, firme y comprometida a ayudar a realizar los objetivos de sus clientes, estas características la han hecho merecedora de nuestra confianza.',
        avatar: 'https://i.imgur.com/lwMi1Vr.jpg',
    },
    {
        name: 'Néstor Muha',
        profession: 'Vocal Radio Taxi 141',
        quote:
            'Radio Taxi 141 se encuentra totalmente complacida con el trabajo realizado y anhela continuar así por mucho tiempo más, tanto por su seriedad como la eficacia con la que la empresa ha prestado sus servicios.',
        avatar: 'https://i.imgur.com/n5TMfxY.jpg',
    },
];

/* eslint-disable global-require */
const HomeComponent = props => {
    const { classes } = props;
    return (
        <div>
            <ContactCard classes={classes.contactCard} />
            <ServicesGallery classes={classes.servicesGallery} content={serviceContent} />
            <Separator classes={classes.separator} text="Más Servicios" link="/Services" />
            <ClientsGallery classes={classes.clientsGallery} contentClients={clientsContent} contentTestimonials={clientsTestimonials} />
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
