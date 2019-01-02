import React from 'react';
import { HomeComponent } from '../../components';

const styles = {
  bgText: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontWeight: 'bold',
    border: '3px solid #f1f1f1',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'z-index': '2',
    width: '80%',
    padding: '20px',
    'text-align': 'center',
  },
  bgImage: {
    width: '100%',
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
