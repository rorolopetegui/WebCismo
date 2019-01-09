import React from 'react';
import { Footer } from '../../components';
import BackgroundFooter from '../../images/Footer.png';

const styles = {
  body: {
    width: '100%',
    float: 'left',
    //backgroundColor: 'blue',
  },
  footerHeader:{
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
    height: '500px',
    float: 'left',
    backgroundImage: `url(${BackgroundFooter})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: '100%',
    color: 'white',
    container:{
      //backgroundColor: 'red',
      margin: '5%',
    },
    contact:{
      float:'left',
      container:{
        //try to align everything in the center
      },
      input:{
        color: '#192727',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '30%',
        height: '35px',
      },
      inputMessage:{
        color: '#192727',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '30%',
        height: '100px',
      }
    },
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class FooterCont extends React.PureComponent {
  render() {
    return (
      <Footer classes={styles} />
    );
  }
}
