import React from 'react';
import { TopMenu } from '../../components';

const styles = {
  body: {
    width: '100%',
    float: 'left',
    //backgroundColor: 'blue',
  },
  menuHeader: {
    width: '100%',
    height: '35px',
    float: 'left',
    color: 'rgba(29, 33, 43, 0.75)',
    backgroundColor: 'rgba(173, 185, 187, 0.2)',
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
    fontWeight: '300',
    paddingLeft: '20%',
    Container: {
      marginTop: '0.5%',
    },
    containerInfo: {
      marginTop: '0.5%',
      float: 'left',
      marginLeft: '20px',
    },
    containerIcon:{
      color: '#918E88',
      width: '15px',
    },
    socialMediaIcon:{
      color: '#918E88',
      //  width: '50px',
      marginLeft:'15px',
    },
    socialMediaIconSize: '2x',
  },
  menuBody: {
    width: '100%',
    height: '120px',
    float: 'left',
    fontSize: '20px',
    fontWeight: '300',
    fontFamily: 'Roboto',
    backgroundColor: 'white',
  },
  menu: {
    listStyleType: 'none',
    margin: '40px',
    float: 'left',
  },
  menuButton: {

    button: {
      float: 'left',
      marginLeft: '10px',
      //backgroundColor: 'rgba(173,185,187, 0.2)',
    },
    buttonHover: {
      float: 'left',
      marginLeft: '10px',
      backgroundColor: 'rgba(173,185,187, 0.2)',
    },
    link: {
      display: 'block',
      color: '#001433',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
  },
  menuLogo: {
    width: '180px',
    float: 'left',
    margin: '30px',
    marginLeft: '8%',

  },
};

/* eslint-disable react/prefer-stateless-function */
export default class TopMenuCont extends React.PureComponent {
  render() {
    return (
      <TopMenu classes={styles} />
    );
  }
}
