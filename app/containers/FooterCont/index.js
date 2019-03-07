import React from 'react';
import { Footer } from '../../components';
import BackgroundFooter from '../../images/Footer.png';

const styles = {
  body: {
    width: '100%',
    float: 'left',
    //backgroundColor: 'blue',
  },
  footerHeader: {
    width: '100%',
    minHeight: '150px',
    float: 'left',
    backgroundColor: '#022a31',
    position: 'relative',
    containerInfo: {
      width: '60%',
      position: 'absolute',
      top: '20%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    containerIcon: {
      button: {
        color: '#4D696E',
        float: 'left',
        marginLeft: '21%',
        textDecoration: 'none',
      },
      buttonHover: {
        float: 'left',
        marginLeft: '21%',
        color: '#088DA5',
        textDecoration: 'none',
      },
      socialMediaIconSize: '2x',
    },
    contactData: {
      container: {
        width: '95%',
        position: 'absolute',
        top: '65%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
      containerInfo: {
        position: 'relative',
        float: 'left',
        width: '100%',
        marginBottom: '1%',
      },
      centerContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      containerIcon: {
        transform: 'scale(1.5)',
        color: '#00B0F0',
        marginRight: '5px',
        button: {
          fontFamily: 'Source Sans Pro',
          color: 'white',
          float: 'left',
          marginLeft: '15px',
          textDecoration: 'none',
        },
        buttonHover: {
          fontFamily: 'Source Sans Pro',
          float: 'left',
          marginLeft: '15px',
          color: '#575551',
          textDecoration: 'none',
        },
      },
    },
  },
  footerBody: {
    backgroundColor: 'blue',
    container: {
      width: '100%',
      height: '50px',
      float: 'left',
      position: 'relative',
      //backgroundColor:'black',
    },
    backgroundImg: {
      position: 'absolute',
      width: '100%',
      height: '50px',
      backgroundColor: 'rgba(0,0,0, 0.7)',
      zIndex: '-1000',
    },
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class FooterCont extends React.PureComponent {
  render() {
    return <Footer classes={styles} />;
  }
}
