import React from 'react';
import { TopMenu } from '../../components';

const styles = {
  menu: {
    listStyleType: 'none',
    paddingRight: '2%',
    float: 'right',
  },
  menuButton: {
    button: {
      float: 'left',
      marginLeft: '10px',
      textTransform: 'uppercase',
    },
    buttonHover: {
      float: 'left',
      marginLeft: '10px',
      color: '#FA5B60',
      textTransform: 'uppercase',
    },
    link: {
      display: 'block',
      color: '#001433',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
    linkHover: {
      display: 'block',
      color: '#FA5B60',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
  },
  menuButtonFixed: {
    button: {
      float: 'left',
      marginLeft: '10px',
      textTransform: 'uppercase',
    },
    buttonHover: {
      float: 'left',
      marginLeft: '10px',
      textTransform: 'uppercase',
    },
    link: {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
    linkHover: {
      display: 'block',
      color: '#FA5B60',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
  },
  menuLogo: {
    width: '180px',
    float: 'left',
    margin: '20px',
    marginLeft: '5%',
  },
  menuLogoAlt: {
    width: '65px',
    float: 'left',
    marginLeft: '10%',
    marginTop: '0.5%',
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class TopMenuCont extends React.PureComponent {
  render() {
    return <TopMenu classes={styles} />;
  }
}
