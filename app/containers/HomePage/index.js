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
};
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <HomeComponent classes={styles} />
    );
  }
}
