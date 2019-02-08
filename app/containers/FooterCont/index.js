import React from 'react';
import { Footer } from '../../components';
import BackgroundFooter from '../../images/Footer.png';

const styles = {
  body: {
    width: '100%',
    float: 'left',
    // backgroundColor: 'blue',
  },
  footerHeader: {
    width: '100%',
    height: '100px',
    float: 'left',
    backgroundColor: '#022a31',
    containerInfo: {
      marginTop: '2%',
      float: 'right',
      marginRight: '5%',
    },
    containerIcon: {
      button: {
        color: '#4D696E',
        float: 'left',
        marginLeft: '35px',
        textDecoration: 'none',
        // backgroundColor: 'rgba(173,185,187, 0.2)',
      },
      buttonHover: {
        float: 'left',
        marginLeft: '35px',
        color: '#088DA5',
        textDecoration: 'none',
      },
      socialMediaIconSize: '2x',
    },
  },
  footerBody: {
    width: '100%',
    height: '400px',
    float: 'left',
    backgroundImage: `url(${BackgroundFooter})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    color: 'white',
    container: {
      // backgroundColor: 'red',
      margin: '5%',
    },
    contact: {
      float: 'right',
      container: {
        float: 'left',
        width: '50%',
        paddingLeft: '10%',
      },
      input: {
        color: '#192727',
        backgroundColor: 'white',
        borderTop: '2px groove grey',
        borderRadius: '10px',
        width: '80%',
        height: '35px',
      },
      inputMessage: {
        color: '#192727',
        backgroundColor: 'white',
        borderTop: '2px groove grey',
        borderRadius: '10px',
        width: '80%',
        height: '100px',
      },
      button: {
        color: 'white',
        backgroundColor: '#00B0F0',
        border: 'solid 2px #006990',
        borderRadius: '5px',
        textAlign: 'left',
        width: '55px',
        height: '40px',
      },
    },
    contactData: {
      container: {
        float: 'left',
        width: '50%',
      },
      containerInfo: {
        width: '100%',
        height: '100px',
        float: 'left',
        paddingLeft: '25%',
      },
      containerIcon: {
        transform: 'scale(1.5)',
        color: '#00B0F0',
        marginRight:'5px',
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
};

/* eslint-disable react/prefer-stateless-function */
export default class FooterCont extends React.PureComponent {
  render() {
    return <Footer classes={styles} />;
  }
}
