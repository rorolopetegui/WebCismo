import React, { PureComponent } from 'react';
import { HeaderBanner } from '../../components/Commons';
import ClientsGallery from '../../components/ClientsGallery/ClientsGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const styles = {
  body: {
    backgroundColor: '#F0F8FF',
  },
  headerSeparator: {
    width: '100%',
    height: '100px',
    backgroundColor: '#F0F8FF',
  },
  headerBanner: {
    container: {
      position: 'relative',
      width: '100%',
      height: '230px',
      background: 'repeating-linear-gradient(45deg, #333333, #333333 10px, #2D2D2D 10px, #2D2D2D 20px)',
      textAlign: 'center',
    },
    sectionTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: '#CCCCCC',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '70px',
      textTransform: 'uppercase',
    },
  },
  clientsGallery: {
    container: {
      position: 'relative',
      float: 'left',
      width: '100%',
      paddingLeft: '5%',
      color: 'black',
    },
    titleContainer: {
      zIndex: '50000',
      position: 'absolute',
      width: '5%',
      height: '100%',
      left: '0',
    },
    titleSection: {
      zIndex: '1000',
      color: '#373831',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '40px',
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'rotate(-90deg)',
      transformOrigin: '100% 100%',
      lineHeight: '35px',
    },
    clientsLogo: {
      width: '60%',
      float: 'left',
    },
    clientImg: {
      display: 'block',
      float: 'left',
      width: '32%',
      height: '280px',
      margin: '5px',
    },
    clientTestimonials: {
      width: '30%',
      float: 'right',
      textAlign: 'center',
      marginRight: '5%',
      title: {
        color: '#373831',
        fontFamily: 'Lato',
        fontWeight: '900',
        fontSize: '40px',
      },
      carouselContainer: {
        position: 'relative',
        width: '100%',
        float: 'left',
      },
      carousel: {
        container: {
          position: 'relative',
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Lato, sans-serif',
        },
        iconRight: {
          position: 'absolute',
          right: 10,
          top: 150,
          zIndex: '1000',
        },
        iconLeft: {
          position: 'absolute',
          left: 10,
          top: 150,
          zIndex: '1000',
        },
        avatar: {
          width: '100px',
          borderRadius: '100%',
        },
        name: {
          color: '#008D62',
          width: '100%',
          fontWeight: '200',
          margin: '0 auto',
          paddingTop: '5%',
          fontSize: '25px',
          lineHeight: '1',
        },
        profession: {
          color: '#A4A4A4',
          fontWeight: '200',
          margin: '0 auto',
          paddingTop: '5%',
          fontSize: '15px',
          lineHeight: '1',
        },
        quote: {
          fontFamily: 'Titillium Web',
          fontStyle: 'italic',
          fontSize: '18px',
          lineHeight: '1.5,',
          fontWeight: '400',
          margin: '20px auto 30px',
          maxWidth: '70%',
        },
      },
    },
    media: {
      container: {
        float: 'left',
        width: '50%',
        height: '250px',
      },
      title: {
        paddingTop: '10%',
        paddingLeft: '5%',
      },
      description: {
        paddingLeft: '5%',
      },
    },
  },
};
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

/* eslint-disable react/prefer-stateless-function */
export default class ClientsPage extends PureComponent {
  render() {
    return (
      <div>
        <div style={styles.headerSeparator} />
        <HeaderBanner classes={styles.headerBanner}>
          <FontAwesomeIcon
            icon={faUsers}
            size="1x"
          /><br />
          Our Clients
        </HeaderBanner>
        <ClientsGallery classes={styles.clientsGallery} contentClients={clientsContent} contentTestimonials={clientsTestimonials} />
      </div>
    );
  }
}
