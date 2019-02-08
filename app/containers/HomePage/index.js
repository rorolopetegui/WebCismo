import React from 'react';
import { HomeComponent } from '../../components';

const imgBackgroundFollowUs = 'https://i.imgur.com/criGPWa.png';
const styles = {
  contactCard: {
    overlayVideo:{
      position: 'absolute',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(255,255,255, 0.7)',
      zIndex:'100',
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
    title:{
      color: '#333333',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '80px',
      zIndex:'1000',
      position: 'absolute',
      top: '30%',
      left: '5%',
    },
    subtitle:{
      maxWidth: '60%',
      color: '#707070',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      fontWeight: '400',
      fontSize: '20px',
      zIndex:'1000',
      position: 'absolute',
      top: '55%',
      left: '5%',
    },
    contact:{
      color: '#121212',
      fontFamily: 'Roboto',
      letterSpacing: '0.1px',
      fontWeight: '900',
      fontSize: '25px',
      zIndex:'1000',
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
      fontFamily: 'Rubik',
      textAlign: 'center',
      color: 'white',
      paddingLeft: '5%',
    },
    titleSection: {
      color: '#373831',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '40px',
      position: 'absolute',
      transform: 'rotate(-90deg)',
      left: -40,
      marginTop: '5%',
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
  clientsGallery: {
    container: {
      width: '100%',
      color: 'black',
      paddingLeft: '5%',
      position: 'relative',
      float: 'left',
    },
    titleSection: {
      color: '#373831',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '40px',
      position: 'absolute',
      width: '100%',
      transform: 'rotate(-90deg) translateY(-100%)',
      transformOrigin: '0px 0px',
      marginTop: '18%',
    },
    clientsLogo: {
      width: '60%',
      float: 'left',
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
    },
    containerButtons: {
      float: 'left',
      width: '50%',
      marginLeft: '25%',
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
        marginTop: '10%',
        marginLeft: '17.5%',
        width: '150px',
        height: '150px',
        float: 'left',
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
      margin: '1.5%',
    },
    text: {
      float: 'right',
      margin: '1.5%',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '20px',

    },
  },
};
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <HomeComponent classes={styles} />
    );
  }
}
