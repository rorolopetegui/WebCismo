import React from 'react';
import { HomeComponent } from '../../components';

const styles = {
  carousel: {
    container: {
      color: 'black',
      textAlign: 'center',
      fontFamily: 'Lato, sans-serif',
    },
    title: {
      fontWeight: '800',
      margin: '0 auto',
      paddingTop: '5%',
      maxWidth: '840px',
      fontSize: '64px',
      lineHeight: '1',
    },
    description: {
      fontSize: '15px',
      lineHeight: '1.5,',
      fontWeight: '300',
      margin: '20px auto 30px',
      maxWidth: '640px',
    },
  },
  servicesGallery: {
    container: {
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
  separator: {
    container: {
      position: 'relative',
      width: '100%',
      float: 'left',
      height: '70px',
      color: 'white',
      backgroundColor: '#022a31',
      overflow: 'hidden',
      zIndex: '1000',
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
