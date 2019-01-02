import React, { PureComponent } from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Test extends PureComponent {
  render() {
    return (
      <div onClick={() => (location.href = '/')}>
        Test Page
      </div>
    );
  }
}
