import React from 'react';
import { TopMenu } from '../../components';

const styles = {
  body: {
    width: '100%',
    float: 'left',
    //backgroundColor: 'blue',
  },
  menuHeader:{
    width: '100%',
    height: '40px',
    float: 'left',
    backgroundColor: 'rgba(173,185,187, 0.2)',
  },
  menuHeaderContainer: {
    marginTop:'0.5%',
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
      marginLeft: '30px',
    },
    buttonHover: {
      float: 'left',
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
