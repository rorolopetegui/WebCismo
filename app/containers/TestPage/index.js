import React, { PureComponent } from 'react';
import { isAndroid, isMobile } from 'react-device-detect';

const styles = {
  body: {
    width: '100%',
    float: 'left',
    //height: '350px',
    color: 'black',
    margin: '10%',
    marginLeft: '50%',
    backgroundColor: 'white',
  },
};
/* eslint-disable react/prefer-stateless-function */
export default class Test extends PureComponent {
  render() {
    return (
      <div>
        Es Android: {isAndroid.toString()}<br/>
        Es Mobile: {isMobile.toString()}<br/>
      </div>
    );
  }
}
