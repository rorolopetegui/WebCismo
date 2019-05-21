import React, { PureComponent } from 'react';
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
/* eslint-disable react/prefer-stateless-function */
export default class Test extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const isMobile = (isAndroid || isIOS ? true : false);
    return (
      <div>
        <div style={!isMobile ? styles.headerSeparator : stylesMobile.headerSeparator} />
        <HeaderBanner classes={!isMobile ? styles.headerBanner : stylesMobile.headerBanner}>
          Nuestras ofertas
          <hr />
        </HeaderBanner>
        <br />
        <OfferTemplate classes={!isMobile ? styles.OfferTemplate : stylesMobile.OfferTemplate} />
      </div>
    );
  }
}
