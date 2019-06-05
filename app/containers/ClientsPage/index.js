import React, { PureComponent } from 'react';
import { HeaderBanner } from '../../components/Commons';
import ClientsGallery from '../../components/ClientsGallery/ClientsGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import ClientsContent from '../../content/ClientsContent';
import ClientsTestimonials from '../../content/ClientsTestimonials';
import { isAndroid, isIOS } from 'react-device-detect';
import { Helmet } from "react-helmet";

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
const stylesMobile = {
  body: {
    backgroundColor: '#F0F8FF',
  },
  headerSeparator: {
    width: '100%',
    height: '70px',
    backgroundColor: '#F0F8FF',
  },
  headerBanner: {
    container: {
      position: 'relative',
      width: '100%',
      height: '200px',
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
      fontSize: '60px',
      textTransform: 'uppercase',
    },
  },
  clientsGallery: {
    container: {
      position: 'relative',
      float: 'left',
      width: '100%',
      paddingLeft: '10%',
      color: 'black',
    },
    titleContainer: {
      zIndex: '1000',
      position: 'absolute',
      width: '10%',
      height: '100%',
      left: '0',
    },
    titleSection: {
      zIndex: '1000',
      color: '#373831',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '30px',
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'rotate(-90deg)',
      transformOrigin: '100% 100%',
    },
    clientsLogo: {
      width: '100%',
      float: 'left',
    },
    clientImgContainer: {
      position: 'relative',
      display: 'block',
      float: 'left',
      width: '40%',
      height: '200px',
      margin: '15px',
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
      width: '100%',
      float: 'left',
      textAlign: 'center',
      title: {
        color: '#373831',
        fontFamily: 'Lato',
        fontWeight: '900',
        fontSize: '35px',
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
          maxWidth: '250px',
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


/* eslint-disable react/prefer-stateless-function */
export default class ClientsPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const isMobile = (isAndroid || isIOS ? true : false);
    return (
      <div>
        <Helmet>
          <title>Clientes - Cismo Solutions</title>
          <meta name="description" content="¡Nuestros Clientes nos recomiendan! Porque somos la solución digital que necesitas. Marketing, desarrollo de software, Apps ¡Todo en un solo lugar!" />
        </Helmet>
        <div style={isMobile ? stylesMobile.headerSeparator : styles.headerSeparator} />
        <HeaderBanner classes={isMobile ? stylesMobile.headerBanner : styles.headerBanner}>
          <FontAwesomeIcon
            icon={faUsers}
            size="1x"
          /><br />
          Nuestros clientes
        </HeaderBanner>
        <ClientsGallery classes={isMobile ? stylesMobile.clientsGallery : styles.clientsGallery} contentClients={ClientsContent} contentTestimonials={ClientsTestimonials} />
      </div>
    );
  }
}
