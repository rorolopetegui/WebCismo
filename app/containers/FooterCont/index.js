import React from 'react';
import { Footer } from '../../components';

const styles = {
  body: {
    width: '100%',
    float: 'left',
    //backgroundColor: 'blue',
  },
  footerHeader:{
    width: '100%',
    height: '40px',
    float: 'left',
    backgroundColor: '#01252C',
  },
  footerBody: {
    width: '100%',
    height: '120px',
    float: 'left',
    backgroundColor: '#335056',
  },
  menu: {
    listStyleType: 'none',
    margin: '40px',
    float: 'left',
  },
  menuButton: {
    button: {
      float: 'left',
    },
    link: {
      display: 'block',
      color: 'red',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
  },
  menuLogo: {
    width: '180px',
    float: 'left',
    margin: '30px',
    
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
