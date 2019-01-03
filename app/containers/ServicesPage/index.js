import React, { PureComponent } from 'react';

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
export default class ServicesPage extends PureComponent {
  render() {
    return (
      <div style={styles.body} onClick={() => (location.href = '/')}>
        Services Page
      </div>
    );
  }
}
