import React, { PureComponent } from 'react';
import { FirstTemplate } from '../../components';
import { HeaderBanner } from '../../components/Commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { isAndroid, isIOS } from 'react-device-detect';
import { Helmet } from "react-helmet";

const styles = {
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
      background: 'repeating-linear-gradient(45deg, #09202F, #09202F 10px, #071722 10px, #071722 20px)',
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
  headerDevelopmentPlataforms: {
    container: {
      position: 'relative',
      marginTop: '5%',
      width: '100%',
      height: '250px',
      backgroundColor: '#09202F',
    },
    sectionTitle: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: '#CCCCCC',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '40px',
      textTransform: 'uppercase',
    },
  },
  body: {
    backgroundColor: '#F0F8FF',
  },
  bodyContent: {
    position: 'relative',
    width: '95%',
  },
  titleContainer: {
    //zIndex: '50000',
    //backgroundColor: 'red',
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
  },
  contentContainer: {
    backgroundColor: 'white',
    width: '100%',
    overflow: 'hidden',
    marginLeft: '5%',
  },
  imgContainer: {
    //backgroundColor: 'red',
    width: '50%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  imgContainerCentered: {
    width: '105%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  textContainer: {
    width: '50%',
    height: '100%',
    position: 'relative',
  },
  textContainerCentered: {
    width: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  textTitle: {
    width: '100%',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '20px',
    color: '#FA5B60',
  },
  textDesc: {
    width: '100%',
    float: 'left',
    color: '#5B5B5B',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
  },
  overlayImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '100',
  },
  secondPart: {
    body: {
      backgroundColor: '#F0F8FF',
    },
    bodyContent: {
      position: 'relative',
      width: '80%',
      marginLeft: '5%',
      marginTop: '-7%',
    },
    titleContainer: {
      //zIndex: '50000',
      //backgroundColor: 'red',
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
    },
    contentContainer: {
      backgroundColor: 'white',
      width: '100%',
      overflow: 'hidden',
      marginLeft: '5%',
    },
    imgContainer: {
      //backgroundColor: 'red',
      width: '50%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    imgContainerCentered: {
      width: '105%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    textContainer: {
      width: '50%',
      height: '100%',
      position: 'relative',
      backgroundColor: '#071722',
    },
    textContainerCentered: {
      width: '80%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    textTitle: {
      width: '100%',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '20px',
      color: '#FA5B60',
    },
    textDesc: {
      width: '100%',
      float: 'left',
      color: 'white',
    },
    img: {
      width: '100%',
      objectFit: 'cover',
    },
    overlayImg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: '100',
    },
  },
};
const stylesMobile = {
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
      background: 'repeating-linear-gradient(45deg, #09202F, #09202F 10px, #071722 10px, #071722 20px)',
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
  headerDevelopmentPlataforms: {
    container: {
      position: 'relative',
      marginTop: '5%',
      width: '100%',
      height: '250px',
      backgroundColor: '#09202F',
    },
    sectionTitle: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: '#CCCCCC',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '30px',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
  body: {
    backgroundColor: '#F0F8FF',
  },
  bodyContent: {
    position: 'relative',
    width: '100%',
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
  contentContainer: {
    backgroundColor: 'white',
    width: '90%',
    overflow: 'hidden',
    marginLeft: '10%',
  },
  imgContainer: {
    //backgroundColor: 'red',
    width: '50%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  imgContainerCentered: {
    width: '105%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  textContainer: {
    width: '50%',
    height: '100%',
    position: 'relative',
  },
  textContainerCentered: {
    width: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  textTitle: {
    width: '100%',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '12px',
    color: '#FA5B60',
  },
  textDesc: {
    width: '100%',
    float: 'left',
    color: '#5B5B5B',
    fontSize: '10px',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
  },
  overlayImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '100',
  },
  secondPart: {
    body: {
      backgroundColor: '#F0F8FF',
    },
    bodyContent: {
      position: 'relative',
      width: '80%',
      marginLeft: '5%',
      marginTop: '-15%',
    },
    titleContainer: {
      //zIndex: '50000',
      //backgroundColor: 'red',
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
      fontSize: '20px',
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'rotate(-90deg)',
      transformOrigin: '100% 100%',
    },
    contentContainer: {
      backgroundColor: 'white',
      width: '100%',
      overflow: 'hidden',
      marginLeft: '5%',
    },
    imgContainer: {
      //backgroundColor: 'red',
      width: '50%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    imgContainerCentered: {
      width: '105%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    textContainer: {
      width: '50%',
      height: '100%',
      position: 'relative',
      backgroundColor: '#071722',
    },
    textContainerCentered: {
      width: '80%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    textTitle: {
      width: '100%',
      fontFamily: 'Lato',
      fontWeight: '900',
      color: '#FA5B60',
      fontSize: '11px',
    },
    textDesc: {
      width: '100%',
      float: 'left',
      color: 'white',
      fontSize: '10px',
    },
    img: {
      width: '100%',
      objectFit: 'cover',
    },
    overlayImg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      //backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: '100',
    },
  },
};
const content = [
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/l1S5oxw.jpg',
    imgMobile: 'https://i.imgur.com/pqiEs9g.png',
    title: 'Estrategia Digital',
    text: 'Antes de que el proyecto surja, se centran las bases sólidas con un rango de servicios digitales especializados que incluyen:'
      + 'Consultorías y talleres estratégicos;'
      + 'Análisis de las fortalezas, debilidades, oportunidades y amenazas del negocio y de sus competidores directos (FODA);'
      + 'Estrategia de Contenido;'
      + 'Análisis y seguimiento;',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/0Tl2RtS.jpg',
    imgMobile: 'https://i.imgur.com/Biz8Kqw.png',
    title: 'Desarrollo de una website responsive',
    text: 'Cualquiera que sea el dispositivo o el navegador, nuestros expertos se aseguran que tu sitio web (o campaña) siempre trabaje a la perfección.'
      + ';Optimización para móvil y tablet'
      + ';Mejora progresiva y reportes constantes'
      + ';Testing de rendimiento',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/9BhTIjd.jpg',
    imgMobile: 'https://i.imgur.com/TuZchk2.png',
    title: 'Sistema de Gestión de Contenidos (CMS) y eCommerce',
    text: 'Soluciones simples y complejas de eCommerce'
      + ';Optimización de páginas web aptas para eCommerce'
      + ';Integración de sistema de pago por terceros',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/Pyxivrx.jpg',
    imgMobile: 'https://i.imgur.com/vCrbDDj.png',
    title: 'Aplicaciones Móviles',
    text: 'Cada vez más personas utilizan dispositivos móviles a la hora de navegar por la web, incluso más que las computadoras. Es por eso que nosotros les damos a las aplicaciones la atención que se merecen.'
      + ';Aplicaciones nativas e híbridas'
      + ';Testing de uso por parte del usuario'
      + ';IOS y Android',
    sizeItem: 'containerSize2x',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/FkN1R4E.jpg',
    imgMobile: 'https://i.imgur.com/JhDHLfX.jpg',
    title: 'Salesforce®️',
    text: 'Nos consideramos amantes del sistema que implementa Salesforce®️, es por eso que orientamos a las organizaciones a planear, diseñar y utilizar soluciones completas realizadas por nuestros desarrolladores en Salesforce®️. Nos encargamos de transformar la manera en la cual los negocios interactúan con sus productos, clientes e incluso empleados.. Nos comprometemos a liberar todo el potencial de tu empresa.',
    sizeItem: 'containerSize2x',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/2eLxo3p.jpg',
    imgMobile: 'https://i.imgur.com/pqiEs9g.jpg',
    title: 'Outsourcing',
    text: 'Contamos con un amplio catalogo de recursos de diferentes tipos para tu empresa, nuestros filtros son brillantes, lo cual hace que al momento de brindarte un candidato este se adapte de la mejor forma al empleo.',
    sizeItem: 'containerSize2x',
  },
];
const content2 = [
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/GCBDKuT.jpg',
    imgMobile: 'https://i.imgur.com/edRGxIU.jpg',
    title: 'Nuevas tecnologias',
    text: 'Nos gustan los desafios, es por esto que optamos día a día utilziar lo último que ofrece el mercado en cuanto a tecnología. Tratamos de desarrollar proyectos inovadores que le guste a las nuevas generaciones.',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/jTkheAj.jpg',
    imgMobile: 'https://i.imgur.com/wpyVyC8.jpg',
    title: 'Clasicas',
    text: 'Además de trabajar con últimas tecnologias, nos gusta utilizar otras mas convencionales, nuestro modelo de negocios nos permite adaptarnos al proyecto que el cliente desee realizar. Como dice nuestro lema, \"Creando soluciones simples a problemas complejos\".',
    sizeItem: 'containerSize1x',
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class ServicesPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const isMobile = (isAndroid || isIOS ? true : false);
    return (
      <div>
        <Helmet>
          <title>Servicios - Cismo Solutions</title>
          <meta name="description" content="¿Te gustaría que tu marca sea líder en el mercado? Somos lo que necesitas, Marketing digital, desarrollo de apps, eCommerce y diseño web." />
        </Helmet>
        <div style={isMobile ? stylesMobile.headerSeparator : styles.headerSeparator} />
        <HeaderBanner classes={isMobile ? stylesMobile.headerBanner : styles.headerBanner}>
          <FontAwesomeIcon
            icon={faCog}
            size="1x"
          /><br />
          Servicios
        </HeaderBanner>
        <FirstTemplate classes={isMobile ? stylesMobile : styles} headerTitle="Servicios" content={content} />
        <HeaderBanner classes={isMobile ? stylesMobile.headerDevelopmentPlataforms : styles.headerDevelopmentPlataforms}>
          Our Key deveolpment Plataforms
        </HeaderBanner>
        <FirstTemplate classes={isMobile ? stylesMobile.secondPart : styles.secondPart} headerTitle="" content={content2} />
      </div>
    );
  }
}
