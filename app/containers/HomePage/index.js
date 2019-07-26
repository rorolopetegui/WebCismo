import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initialState } from '../../reducers/pageState'
import { HomeComponent } from '../../components'
import { isAndroid, isIOS } from 'react-device-detect'
import { Helmet } from "react-helmet"

const imgBackgroundFollowUs = 'https://i.imgur.com/criGPWa.png'
const styles = {
  contactCard: {
    overlayVideo: {
      position: 'absolute',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(255,255,255, 0.7)',
      zIndex: '100',
    },
    containerVideo: {
      position: 'relative',
      float: 'left',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: 'rgba(0,0,0,0.5)',
    },
    backgroundVideo: {
      //zIndex:'100',
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
    },
    title: {
      color: '#333333',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '80px',
      zIndex: '1000',
      position: 'absolute',
      top: '16%',
      left: '5%',
    },
    subtitle: {
      maxWidth: '60%',
      color: '#707070',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      fontWeight: '400',
      fontSize: '20px',
      zIndex: '1000',
      position: 'absolute',
      top: '48%',
      left: '5%',
    },
    contact: {
      color: '#121212',
      fontFamily: 'Roboto',
      letterSpacing: '0.1px',
      fontWeight: '900',
      fontSize: '25px',
      zIndex: '1000',
      position: 'absolute',
      left: '2%',
      bottom: '3%',
    },
  },
  servicesGallery: {
    container: {
      position: 'relative',
      float: 'left',
      width: '100%',
      paddingLeft: '5%',
      fontFamily: 'Rubik',
      textAlign: 'center',
      color: 'white',
    },
    titleContainer: {
      zIndex: '1000',
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
    media: {
      mediaButton: {
        position: 'relative',
        width: '50%',
        float: 'left',
        maxHeight: '240px',
        overflow: 'hidden',
      },
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
      zIndex: '1000',
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
      width: '40%',
      float: 'left',
      textAlign: 'center',
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
          maxWidth: '350px',
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
  followUs: {
    container: {
      width: '100%',
      height: '450px',
      overflow: 'hidden',
      background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${imgBackgroundFollowUs}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      fontFamily: 'Lato',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
    },
    containerButtons: {
      width: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    containerButton: {
      position: 'relative',
      float: 'left',
      marginLeft: '2.5%',
      width: '30%',
      height: '200px',
      //backgroundColor: 'blue',
    },
    title: {
      width: '100%',
      fontSize: '40px',
      fontWeight: '900',
      float: 'left',
      marginTop: '2%',
    },
    subtitle: {
      width: '100%',
      fontSize: '20px',
      fontWeight: '200',
      float: 'left',
    },
    subtitleAlt: {
      color: '#66A3A3',
    },
    socialMediaButton: {
      container: {
        textDecoration: 'none',
        width: '150px',
        height: '150px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  firstContact: {
    container: {
      width: '100%',
      height: '350px',
      fontFamily: 'Lato',
      position: 'relative',
    },
    title: {
      marginTop: '20px',
      width: '100%',
      float: 'left',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: '50px',
    },
    subtitle: {
      width: '100%',
      float: 'left',
      textAlign: 'center',
    },
    contactButton: {
      container: {
        margin: '0',
        backgroundColor: '#05697B',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '150px',
        height: '50px',
        borderRadius: '16px',
        borderBottom: '3px solid #335151',
      },
      innerContent: {
        fontFamily: 'Roboto',
        fontWeight: '300',
        fontSize: '25px',
        color: 'white',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  separator: {
    container: {
      position: 'relative',
      width: '100%',
      float: 'left',
      height: '70px',
      color: 'white',
      backgroundColor: '#022a31',
      overflow: 'hidden',
      zIndex: '100',
    },
    background: {
      position: 'absolute',
      backgroundColor: '#011518',
      float: 'left',
      height: '70px',
      width: '6%',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      left: '2%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    iconHover: {
      position: 'absolute',
      top: '50%',
      left: '5%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    text: {
      float: 'right',
      margin: '1.5%',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '20px',

    },
  },
}
const stylesMobile = {
  contactCard: {
    containerVideo: {
      position: 'relative',
      float: 'left',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: 'rgba(0,0,0,0.5)',
      //backgroundColor: 'red',
    },
    overlayVideo: {
      position: 'absolute',
      width: '100vw',
      height: '100%',
      backgroundColor: 'rgba(255,255,255, 0.7)',
      //backgroundColor: 'red',
      zIndex: '100',
    },
    backgroundVideo: {
      //zIndex:'100',
      position: 'absolute',
      minWidth: '100vw',
      minHeight: '100%',
    },
    title: {
      color: '#333333',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '35px',
      fontWeight: '900',
      fontSize: '35px',
      maxWidth: '95vw',
      zIndex: '1000',
      position: 'absolute',
      top: '15%',
      left: '5%',
    },
    subtitle: {
      color: '#707070',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '20px',
      fontWeight: '400',
      fontSize: '15px',
      zIndex: '1000',
      position: 'absolute',
      top: '35%',
      left: '5%',
      maxWidth: '90vw',
    },
    contact: {
      color: '#121212',
      fontFamily: 'Roboto',
      letterSpacing: '0.1px',
      fontWeight: '900',
      fontSize: '20px',
      lineHeight: '20px',
      zIndex: '1000',
      position: 'absolute',
      maxWidth: '90vw',
      left: '5%',
      bottom: '10%',
    },
  },
  servicesGallery: {
    container: {
      position: 'relative',
      float: 'left',
      width: '100%',
      paddingLeft: '10%',
      fontFamily: 'Rubik',
      textAlign: 'center',
      color: 'white',
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
    media: {
      mediaButton: {
        position: 'relative',
        width: '100%',
        float: 'left',
        maxHeight: '240px',
        overflow: 'hidden',
      },
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
  followUs: {
    container: {
      width: '100%',
      height: '450px',
      overflow: 'hidden',
      background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${imgBackgroundFollowUs}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      fontFamily: 'Lato',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
    },
    containerButtons: {
      //backgroundColor: 'red',
      width: '90%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    containerButton: {
      position: 'relative',
      float: 'left',
      marginLeft: '2.5%',
      width: '30%',
      height: '200px',
      //backgroundColor: 'blue',
    },
    title: {
      width: '100%',
      fontSize: '40px',
      fontWeight: '900',
      float: 'left',
      marginTop: '2%',
    },
    subtitle: {
      width: '100%',
      fontSize: '20px',
      fontWeight: '200',
      float: 'left',
    },
    subtitleAlt: {
      color: '#66A3A3',
    },
    socialMediaButton: {
      container: {
        textDecoration: 'none',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  firstContact: {
    container: {
      width: '100%',
      height: '350px',
      fontFamily: 'Lato',
      position: 'relative',
    },
    title: {
      marginTop: '20px',
      width: '100%',
      float: 'left',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: '50px',
    },
    subtitle: {
      width: '100%',
      float: 'left',
      textAlign: 'center',
    },
    contactButton: {
      container: {
        margin: '0',
        backgroundColor: '#66A3A3',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '150px',
        height: '50px',
        borderRadius: '4%',
        borderBottom: '3px solid #335151',
      },
      innerContent: {
        fontFamily: 'Roboto',
        fontWeight: '300',
        fontSize: '25px',
        color: 'white',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  separator: {
    container: {
      position: 'relative',
      width: '100%',
      float: 'left',
      height: '50px',
      color: 'white',
      backgroundColor: '#022a31',
      overflow: 'hidden',
      zIndex: '100',
    },
    background: {
      position: 'absolute',
      backgroundColor: '#011518',
      float: 'left',
      height: '70px',
      width: '10%',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      left: '5%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    iconHover: {
      position: 'absolute',
      top: '50%',
      left: '7%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    text: {
      position: 'absolute',
      top: '50%',
      right: '-5%',
      marginLeft: '-50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '15px',

    },
  },
}
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const isMobile = (isAndroid || isIOS ? true : false)
    //const { englishLang } = this.props

    return (
      <div>
        <Helmet>
          <title>Cismo Solutions</title>
          <meta name="description" content="Cismo Solutions ¡Creamos soluciones simples a problemas complejos! Sofware, Apps, Marketing digital. Lo que buscas, lo tenemos. Páginas web y eCommerce." />
        </Helmet>
        <HomeComponent engLang={this.props.englishLang} classes={!isMobile ? styles : stylesMobile} />
      </div>
    );
  }
}

HomePage.propTypes = {
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
)(HomePage)