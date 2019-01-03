import React from 'react';
import { HomeComponent } from '../../components';

const styles = {
  test: {
    height: '1000px',
  },
};
const welcomeImageName = 'WelcomeImage.jpg';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <HomeComponent/>
    );
  }
}
