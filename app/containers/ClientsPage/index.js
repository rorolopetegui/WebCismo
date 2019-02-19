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
    clientImgContainer: {
      position: 'relative',
      display: 'block',
      float: 'left',
      width: '32%',
      height: '200px',
      margin: '5px',
      overflow: 'hidden',
      //backgroundColor: 'red',
    },
    clientImg: {
      position: 'absolute',
      width: '80%',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1000',
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
  },
};
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

/* eslint-disable react/prefer-stateless-function */
export default class ClientsPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div style={styles.headerSeparator} />
        <HeaderBanner classes={styles.headerBanner}>
          <FontAwesomeIcon
            icon={faUsers}
            size="1x"
          /><br />
          Nuestros clientes
        </HeaderBanner>
        <ClientsGallery classes={styles.clientsGallery} contentClients={clientsContent} contentTestimonials={clientsTestimonials} />
      </div>
    );
  }
}
