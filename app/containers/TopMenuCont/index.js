import React from 'react';
import { TopMenu } from '../../components';

const styles = {
  body: {
    width: '100%',
    backgroundColor: 'blue',
  },
  menu: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
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

};

/* eslint-disable react/prefer-stateless-function */
export default class TopMenuCont extends React.PureComponent {
  render() {
    return (
      <TopMenu classes={styles} />
    );
  }
}
