import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initialState } from '../../reducers/pageState'
import { OfferTemplate } from '../../components';
import { HeaderBanner } from '../../components/Commons';
import { isAndroid, isIOS } from 'react-device-detect';
import MoonBanner from '../../images/MoonBanner.jpg';
import OffersSplash from '../../images/OffersSplash.jpg';

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
      height: '200px',
      backgroundImage: `url(${OffersSplash})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      textAlign: 'center',
    },
    sectionTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontFamily: 'Roboto',
      letterSpacing: '0.3rem',
      lineHeight: '3rem',
      fontWeight: '900',
      fontSize: '3rem',
      textTransform: 'uppercase',
    },
  },
  OfferTemplate: {
    titleSection: {
      textAlign: 'center',
      fontFamily: 'Montserrat',
      color: '',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    subtitle: {
      fontSize: '1rem',
      fontWeight: '300',
    },
    offers: {
      width: '100%',
      position: 'relative',
    },
    notIncluded: {
      width: '100%',
      position: 'relative',
      float: 'left',
      color: '#526568',
      fontSize: '0.85rem',
      marginTop: '3rem',
      marginBottom: '3rem',
    },
    offer: {
      width: '25%',
      position: 'relative',
      float: 'left',
      marginLeft: '6.25%',
      color: '#526568',
      textAlign: 'center',
      fontFamily: '',
      title: {
        backgroundColor: '#022a31',
        color: 'white',
        height: '3rem',
      },
      price: {
        color: '#022a31',
        fontWeight: '600',
        fontSize: '1.75rem',
      },
      priceIva: {
        fontSize: '1.15rem',
      },
      nameService: {
        width: '100%',
        float: 'left',
        fontWeight: '600',
        marginTop: '1.5rem',
      },
      descService: {
        width: '100%',
        float: 'left',
      }
    },
    bannerContainer: {
      width: '100%',
      height: '200px',
      position: 'relative',
      float: 'left',
      backgroundImage: `url(${MoonBanner})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    bannerTitle: {
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: '600',
      position: 'absolute',
      top: '50%',
      left: '20%',
      transform: 'translate(-50%, -50%)',
    },
    ideasContact: {
      container: {
        backgroundColor: '#05697B',
        width: '10rem',
        height: '3rem',
        position: 'absolute',
        top: '50%',
        left: '80%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '16px',
        borderBottom: '3px solid #335151',
      },
      containerDisable: {

      },
      innerContent: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: '1.1rem',
        fontWeight: '600',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    buttonContainer: {
      position: 'relative',
      width: '100%',
      float: 'left',
    },
    hireButton: {
      container: {
        marginTop: '15px',
        backgroundColor: '#05697B',
        width: '100%',
        height: '3rem',
        position: 'relative',
        float: 'left',
        paddingTop: '0.5rem',
      },
      containerDisable: {

      },
      innerContent: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: '1.1rem',
        fontWeight: '600',
      },
    },
  },
};

const stylesMobile = {
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
      height: '200px',
      backgroundImage: `url(${OffersSplash})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      textAlign: 'center',
    },
    sectionTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontFamily: 'Roboto',
      letterSpacing: '0.3rem',
      lineHeight: '3rem',
      fontWeight: '900',
      fontSize: '3rem',
      textTransform: 'uppercase',
    },
  },
  OfferTemplate: {
    titleSection: {
      textAlign: 'center',
      fontFamily: 'Montserrat',
      color: '',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    subtitle: {
      fontSize: '1rem',
      fontWeight: '300',
    },
    offers: {
      width: '100%',
      position: 'relative',
    },
    notIncluded: {
      width: '100%',
      position: 'relative',
      float: 'left',
      color: '#526568',
      fontSize: '0.85rem',
      marginTop: '3rem',
      marginBottom: '3rem',
    },
    offer: {
      width: '100%',
      position: 'relative',
      float: 'left',
      color: '#526568',
      textAlign: 'center',
      fontFamily: '',
      title: {
        backgroundColor: '#022a31',
        color: 'white',
        height: '3rem',
      },
      price: {
        color: '#022a31',
        fontWeight: '600',
        fontSize: '1.75rem',
      },
      priceIva: {
        fontSize: '1.15rem',
      },
      nameService: {
        width: '100%',
        float: 'left',
        fontWeight: '600',
        marginTop: '1.5rem',
      },
      descService: {
        width: '100%',
        float: 'left',
      }
    },
    bannerContainer: {
      width: '100%',
      height: '200px',
      position: 'relative',
      float: 'left',
      backgroundImage: `url(${MoonBanner})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    bannerTitle: {
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: '600',
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    ideasContact: {
      container: {
        backgroundColor: '#05697B',
        width: '10rem',
        height: '3rem',
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '16px',
        borderBottom: '3px solid #335151',
      },
      containerDisable: {

      },
      innerContent: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: '1.1rem',
        fontWeight: '600',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    buttonContainer: {
      position: 'relative',
      width: '100%',
      float: 'left',
    },
    hireButton: {
      container: {
        marginTop: '15px',
        backgroundColor: '#05697B',
        width: '100%',
        height: '3rem',
        position: 'relative',
        float: 'left',
        paddingTop: '0.5rem',
      },
      containerDisable: {

      },
      innerContent: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: '1.1rem',
        fontWeight: '600',
      },
    },
  },
};
const offers = [
  {
      id: 0,
      title: 'One Page - Básica',
      name: 'Landing Page',
      price: 'U$S 195',
      services: [
          {
              name: 'Panel de administrador de contenido',
              desc: 'Wordpress',
          },
          {
              name: 'Secciones 2',
              desc: 'Inicio | Contacto',
          },
          {
              name: 'Banner animado',
              desc: 'Incluye banner con hasta 3 imágenes',
          },
          {
              name: 'Responsive',
              desc: 'Nuestras webs se adaptan a cualquier dispositivo',
          },
          {
              name: 'Formulario de contacto',
              desc: 'Consultas web a su correo',
          },
          {
              name: 'Link a redes sociales',
              desc: 'Si',
          }
      ]
  },
  {
      id: 1,
      title: 'Redes - Básica',
      name: 'Redes',
      price: 'U$S 195',
      services: [
          {
              name: 'Manejo e Implementación de Redes Sociales',
              desc: 'Se definen objetivos y metas con el cliente.',
          },
          {
              name: 'Diseño de Publicaciones e Historias.',
              desc: '4 publicaciones por semana, 16 publicaciones mensuales.',
          },
          {
              name: '2 Publicaciones Pagas por Mes.*',
              desc: 'Armado de Cronograma de Publicaciones.',
          },
          {
              name: 'Creacion de Contenidos.',
              desc: 'Redaccion y Creatividad.',
          },
          {
              name: 'Reuniones Mensuales con el Cliente.',
              desc: 'Estadisticas Mensuales de Rendimiento.',
          }
      ]
  },
  {
      id: 2,
      title: 'Custom',
      name: 'Custom',
      price: 'A convenir',
      services: [
          {
              name: 'Realizamos cualquier tipo de software',
              desc: 'Paginas web, Software a medida, mantenimiento.',
          },
      ]
  },
];

const offersEnglish = [
  {
      id: 0,
      title: 'One Page - Basic',
      name: 'Landing Page',
      price: 'U$S 195',
      services: [
          {
              name: 'Content Manager Panel',
              desc: 'Wordpress',
          },
          {
              name: 'Sections 2',
              desc: 'Home | Contact',
          },
          {
              name: 'Animated banner',
              desc: 'Includes banner up to 3 images',
          },
          {
              name: 'Responsive',
              desc: 'Our websites adapt to any device',
          },
          {
              name: 'Contact Form',
              desc: 'Web queries to your email',
          },
          {
              name: 'Link to social media',
              desc: 'Yes',
          }
      ]
  },
  {
      id: 1,
      title: 'Social Media - Basic',
      name: 'Social Media',
      price: 'U$S 195',
      services: [
          {
              name: 'Management and Implementation of Social Networks',
              desc: 'Objectives and goals are defined with the client.',
          },
          {
              name: 'Design of Publications and Stories.',
              desc: '4 publications per week, 16 monthly publications.',
          },
          {
              name: '2 Publications Pay per Month. *',
              desc: 'Armed of Schedule of Publications.',
          },
          {
              name: 'Content creation.',
              desc: 'Writing and creativity.',
          },
          {
              name: 'Monthly/Weekly Meetings with you.',
              desc: 'Monthly/Weekly Performance Statistics.',
          }
      ]
  },
  {
      id: 2,
      title: 'Custom',
      name: 'Custom',
      price: 'To agree',
      services: [
          {
              name: 'We make any kind of software',
              desc: 'Web pages, custom software, maintenance.',
          },
      ]
  },
];

/* eslint-disable react/prefer-stateless-function */
class Offers extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const isMobile = (isAndroid || isIOS ? true : false);
    const { englishLang } = this.props;
    return (
      <div>
        <div style={!isMobile ? styles.headerSeparator : stylesMobile.headerSeparator} />
        <HeaderBanner classes={!isMobile ? styles.headerBanner : stylesMobile.headerBanner}>
          {englishLang ? "Our Offers" : "Nuestras ofertas"}
          <hr />
        </HeaderBanner>
        <br />
        <OfferTemplate 
        classes={!isMobile ? styles.OfferTemplate : stylesMobile.OfferTemplate} 
          title={englishLang ? "See our incredible offers" : "Mira nuestras increibles ofertas"}
          subtitle={englishLang ? "We focus on, that you can fulfill your dreams" : "Nos enfocamos en que puedas cumplir tus sueños"}
          excluded={englishLang ? "*Prices do not include domain or hosting" : "*Los precios no incluyen dominio ni hosting."}
          contractBtn={englishLang ? "Hire" : "Contratar"}
          callMeTitle={englishLang ? "We make your ideas" : "Cumplimos con tus ideas"}
          callMeBtn={englishLang ? "Call us!" : "Llamanos!"}
          offers={englishLang ? offersEnglish : offers}
        />
      </div>
    );
  }
}

Offers.propTypes = {
  englishLang: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  const p = state.get('pageState', initialState)
  return {
    englishLang: p.englishLang,
  }
}



export default connect(
  mapStateToProps,
  null,
)(Offers)