import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initialState } from '../../reducers/pageState'
import { FirstTemplate } from '../../components';
import { HeaderBanner } from '../../components/Commons';
import ImgButton from '../../components/Commons/ImgButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import MediaButton from '../../components/MenuComps/MediaButton';
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
    backgroundColor: '#333333',
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
  teamContainer: {
    width: '80%',
    height: '300px',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  titleTeam: {
    fontFamily: 'Roboto',
    letterSpacing: '0.1px',
    fontWeight: '900',
    fontSize: '25px',
    color: 'black',
  },
  teamPlayer: {
    mediaButton: {
      position: 'relative',
      float: 'left',
      width: '15%',
      height: '180px',
      marginLeft: '8%',
      marginTop: '5%',
      marginBottom: '2%',
      overflow: 'hidden',
    },
    imgMedia: {
      width: '100%',
    },
    mediaTitle: {
      fontSize: '20px',
      color: 'white',
      position: 'absolute',
      width: '80%',
      top: '5%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    mediaDesc: {
      position: 'absolute',
      width: '10%',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    containerIcon: {
      button: {
        color: '#4D696E',
        float: 'left',
        //marginLeft: '35px',
        textDecoration: 'none',
        // backgroundColor: 'rgba(173,185,187, 0.2)',
      },
      buttonHover: {
        float: 'left',
        //marginLeft: '35px',
        color: '#088DA5',
        textDecoration: 'none',
      },
      socialMediaIconSize: '2x',
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
    backgroundColor: '#333333',
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
    color: 'white',
    fontSize: '11px',
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
  teamContainer: {
    width: '80%',
    height: '300px',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  titleTeam: {
    fontFamily: 'Roboto',
    letterSpacing: '0.1px',
    fontWeight: '900',
    fontSize: '12px',
    color: 'black',
  },
  teamPlayer: {
    mediaButton: {
      position: 'relative',
      float: 'left',
      width: '40%',
      height: '180px',
      marginLeft: '6.6%',
      marginTop: '5%',
      marginBottom: '2%',
      overflow: 'hidden',
    },
    imgMedia: {
      width: '100%',
    },
    mediaTitle: {
      fontSize: '20px',
      color: 'white',
      position: 'absolute',
      width: '90%',
      top: '5%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    mediaDesc: {
      position: 'absolute',
      width: '10%',
      top: '40%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    containerIcon: {
      button: {
        color: '#4D696E',
        float: 'left',
        //marginLeft: '35px',
        textDecoration: 'none',
        // backgroundColor: 'rgba(173,185,187, 0.2)',
      },
      buttonHover: {
        float: 'left',
        //marginLeft: '35px',
        color: '#088DA5',
        textDecoration: 'none',
      },
      socialMediaIconSize: '2x',
    },
  },
};

const content = [
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/rv8KeEU.png',
    imgMobile: 'https://i.imgur.com/pRqOyHF.png',
    title: 'Trabajo en Equipo',
    text: 'Quieres saber el secreto? El trabajo en equipo. Si bien contamos con un gran equipo que trabaja tanto a distancia como en la oficina diariamente, el trabajo en equipo que valoramos más es el que realizamos en conjunto contigo para alcanzar los objetivos propuestos.',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/WeX8IKP.jpg',
    imgMobile: 'https://i.imgur.com/EmVJzQf.png',
    title: 'Estrategia',
    text: 'Conectamos las ideas de nuestros clientes con la información significativa logrando así ofrecer las mejores recomendaciones y tácticas para cumplir los objetivos del negocio.',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/DEe9B4j.jpg',
    imgMobile: 'https://i.imgur.com/WsQ6AZY.png',
    title: 'Contacto Constante',
    text: 'Ya sea a través de la creación de una página web con ecommerce habilitada y luego reportar resultados de posicionamiento o como un programa informático que necesites para facilitar tareas, en Cismo Solutions siempre mantenemos un contacto constante con nuestros clientes y nos preocupamos por satisfacer sus necesidades.',
    sizeItem: 'containerSize2x',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/Jyvc8EN.jpg',
    imgMobile: 'https://i.imgur.com/cMDI625.png',
    title: 'Soporte Continuo',
    text: 'Una vez creada la hermosa página web o el software completamente funcional no nos quedamos admirandola. Más bien, nos encargamos de realizar diferentes pruebas de manera que todo tu personal se sienta capaz de utilizarlo y modificarlo exitosamente. Siempre estaremos aquí si tienes alguna consulta. Y regresaremos con cualquier otra idea que nos parezca útil para ti.',
    sizeItem: 'containerSize2x',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/uvS9XgP.jpg',
    imgMobile: 'https://i.imgur.com/E7Prb0d.png',
    title: 'Portafolio',
    text: 'Desde una pequeña aplicación móvil hasta una solución empresarial completa con manejo de redes sociales incluida. Nuestro trabajo se destaca en el compromiso y la eficacia.',
    sizeItem: 'containerSize1x',
  },
];

const contentEnglish = [
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/rv8KeEU.png',
    imgMobile: 'https://i.imgur.com/pRqOyHF.png',
    title: 'Teamwork',
    text: 'Do you want to know the secret? Team work. Although we have a great team that works both remotely and in the office daily, the team work that we value the most is what we do together with you to achieve the proposed objectives.',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/WeX8IKP.jpg',
    imgMobile: 'https://i.imgur.com/EmVJzQf.png',
    title: 'Strategy',
    text: 'We connect our clients\' ideas with meaningful information, thus offering the best recommendations and tactics to meet the business objectives.',
    sizeItem: 'containerSize1x',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/DEe9B4j.jpg',
    imgMobile: 'https://i.imgur.com/WsQ6AZY.png',
    title: 'Constant Contact',
    text: 'Whether through the creation of a web page with ecommerce enabled and then report positioning results or as a computer program that you need to facilitate tasks, at Cismo Solutions we always maintain constant contact with our customers and we care to meet their needs.',
    sizeItem: 'containerSize2x',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/Jyvc8EN.jpg',
    imgMobile: 'https://i.imgur.com/cMDI625.png',
    title: 'Continuous support',
    text: 'Once the beautiful website or the fully functional software was created, we were not admiring it. Rather, we take care of different tests so that all your staff feels able to use it and modify it successfully. We will always be here if you have any questions. And we will return with any other idea that seems useful to you.',
    sizeItem: 'containerSize2x',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/uvS9XgP.jpg',
    imgMobile: 'https://i.imgur.com/E7Prb0d.png',
    title: 'Portfolio',
    text: 'From a small mobile application to a complete business solution with social media management included. Our work stands out in commitment and effectiveness.',
    sizeItem: 'containerSize1x',
  },
];

const teamRoster = [
  {
    name: 'Danilo Carella',
    profession: 'CEO',
    avatar: 'https://i.imgur.com/Mz7lNin.png',
    avatarAlt: 'https://i.imgur.com/Mz7lNin.png',
    linkedin: '/in/danilo-carella-0806a0153/',
  },
  {
    name: 'Danilo de León',
    profession: 'CEO',
    avatar: 'https://i.imgur.com/Mz7lNin.png',
    avatarAlt: 'https://i.imgur.com/Mz7lNin.png',
    linkedin: '/in/cismo-uruguay-6abb9117a/',
  },
  {
    name: 'Sharon Iciarte',
    profession: 'Operations',
    avatar: 'https://i.imgur.com/pgLnzBZ.png',
    avatarAlt: 'https://i.imgur.com/pgLnzBZ.png',
    linkedin: '/in/sharon-iciarte/',
  },
  {
    name: 'Kevin Pacin',
    profession: 'Sales man',
    avatar: 'https://i.imgur.com/Mz7lNin.png',
    avatarAlt: 'https://i.imgur.com/Mz7lNin.png',
    linkedin: '/in/kevin-pacin-449249163/',
  },
  {
    name: 'Rodrigo Lopetegui',
    profession: 'Software Developer',
    avatar: 'https://i.imgur.com/Mz7lNin.png',
    avatarAlt: 'https://i.imgur.com/Mz7lNin.png',
    linkedin: '/in/rodrigo-lopetegui-bb7808107/',
  },
];

/* eslint-disable react/prefer-stateless-function */
class CompanyPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const isMobile = (isAndroid || isIOS ? true : false);
    const { englishLang } = this.props;
    return (
      <div>
        <Helmet>
          <title>{englishLang ? "About us" : "Nosotros" } - Cismo Solutions</title>
          <meta name="description" content="¡Tenemos las Soluciones Informáticas que necesitas! Desarrollo de software, Apps y Páginas Web. Adaptados a las Necesidades de tu Empresa." />
        </Helmet>
        <div style={!isMobile ? styles.headerSeparator : stylesMobile.headerSeparator} />
        <HeaderBanner classes={!isMobile ? styles.headerBanner : stylesMobile.headerBanner}>
          <FontAwesomeIcon
            icon={faUserTie}
            size="1x"
          /><br />
          {englishLang ? "Company" : "Empresa"}
        </HeaderBanner>
        <FirstTemplate classes={!isMobile ? styles : stylesMobile} content={englishLang ? contentEnglish : content} headerTitle={"Vision"}>
          <div style={!isMobile ? styles.teamContainer : stylesMobile.teamContainer}>
            <span style={!isMobile ? styles.titleTeam : stylesMobile.titleTeam}>{englishLang ? "Meet the team" : "Conoce a nuestro equipo"}</span>
            {teamRoster.map((item, index) =>
              <div key={index}>
                <ImgButton
                  classes={!isMobile ? styles.teamPlayer : stylesMobile.teamPlayer}
                  withImgAlt={true}
                  backgroundImage={item.avatar}
                  backgroundImageAlt={item.avatarAlt}
                  title={item.profession}
                  link={item.linkedin}
                  description={
                    <MediaButton
                      classes={!isMobile ? styles.teamPlayer.containerIcon : stylesMobile.teamPlayer.containerIcon}
                      link={"https://www.linkedin.com" + item.linkedin}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size={!isMobile ? styles.teamPlayer.containerIcon.socialMediaIconSize : stylesMobile.teamPlayer.containerIcon.socialMediaIconSize}
                      />
                    </MediaButton>
                  }
                />
              </div>
            )}
          </div>
        </FirstTemplate>
      </div>
    );
  }
}

CompanyPage.propTypes = {
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
)(CompanyPage)