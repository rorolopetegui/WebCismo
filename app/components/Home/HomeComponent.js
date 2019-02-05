import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Carousel/Carousel';
import Separator from '../Separator/Separator';
import ServicesGallery from '../ServicesGallery/ServicesGallery';
import ClientsGallery from '../ClientsGallery/ClientsGallery';
const content = [
    {
        title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        image: 'https://i.imgur.com/m3No8rR.jpg',
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        image: 'https://i.imgur.com/61k7YN6.jpg',
    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        image: 'https://i.imgur.com/TxEJcKj.jpg',
    }
];
const serviceContent = [
    {
        title: 'SERVICE 1',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/faTkAiQ.png',
        link: '#',
    },
    {
        title: 'SERVICE 2',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/AcYJFtr.png',
        link: '#',
    },
    {
        title: 'SERVICE 3',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/rv8KeEU.png',
        link: '#',
    },
    {
        title: 'SERVICE 4',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/jIGimk7.png',
        link: '#',
    },
    {
        title: 'SERVICE 5',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/ka4B4Op.png',
        link: '#',
    },
    {
        title: 'SERVICE 6',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/IP4vXoM.png',
        link: '#',
    },
];
const clientsContent = [
    {
        title: 'CLIENT 1',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/faTkAiQ.png',
        link: '#',
    },
    {
        title: 'CLIENT 2',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/AcYJFtr.png',
        link: '#',
    },
    {
        title: 'CLIENT 3',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/rv8KeEU.png',
        link: '#',
    },
    {
        title: 'SERCLIENTVICE 4',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/jIGimk7.png',
        link: '#',
    },
    {
        title: 'CLIENT 5',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/ka4B4Op.png',
        link: '#',
    },
    {
        title: 'CLIENT 6',
        description:
            'Realizamos tus sueños',
        backgroundImage: 'https://i.imgur.com/IP4vXoM.png',
        link: '#',
    },
];
const clientsTestimonials = [
    {
        name: 'Bill Gates',
        profession: 'CEO Microsoft',
        quote:
            'I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.',
        avatar: 'https://i.imgur.com/UqAfVas.jpg',
    },
    {
        name: 'A Blonde',
        profession: 'Just a Blonde',
        quote:
            'The very first thing I saw was his eyes, bluer and brighter than the sea itself. They gazed at me, so dazzling, and for an instant I couldnt even feel the pain. I was too overcome by the handsomeness of this sandy haired boy',
        avatar: 'https://i.imgur.com/2PhbhsT.jpg',
    },
    {
        name: 'Elon Musk',
        profession: 'CEO at TESLA, SpaceX',
        quote:
            'If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, its not.',
        avatar: 'https://i.imgur.com/GMu7e8u.jpg',
    },
    {
        name: 'Jeff Bezos',
        profession: 'CEO of Amazon',
        quote:
            'If you double the number of experiments you do per year you’re going to double your inventiveness.',
        avatar: 'https://i.imgur.com/ib2vxCC.jpg',
    },
    {
        name: 'Mark Zuckerberg',
        profession: 'CEO of Facebook',
        quote:
            'So many businesses get worried about looking like they might make a mistake, they become afraid to take any risk. Companies are set up so that people judge each other on failure.',
        avatar: 'https://i.imgur.com/ehChDKn.jpg',
    },
    {
        name: 'Pepe Mujica',
        profession: 'Ex-President of Uruguay',
        quote:
            'When you buy something, the instrument is money, but in reality you are buying it with the hours of your life that you spent earning that money. The greatest thing that you have is that you are alive.',
        avatar: 'https://i.imgur.com/qmuqGfT.jpg',
    },
];
/* eslint-disable global-require */
const HomeComponent = props => {
    const { children, classes } = props;
    return (
        <div>
            <Carousel classes={classes.carousel} content={content} />
            <ServicesGallery classes={classes.servicesGallery} content={serviceContent} />
            <Separator classes={classes.separator} text="More Services" link="#" />
            <ClientsGallery classes={classes.clientsGallery} contentClients={clientsContent} contentTestimonials={clientsTestimonials} />
            <Separator classes={classes.separator} text="View more work" link="#" />
            HOLA
        </div>
    );
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default HomeComponent;
