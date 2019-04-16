/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { isAndroid, isIOS } from 'react-device-detect';

import messages from './messages';

const styles = {
  headerSeparator: {
    width: '100%',
    height: '100px',
    backgroundColor: '#F0F8FF',
  },
};
const stylesMobile = {
  headerSeparator: {
    width: '100%',
    height: '70px',
    backgroundColor: '#F0F8FF',
  },
};
/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    const isMobile = (isAndroid || isIOS ? true : false);
    return (
      <div>
        <div style={isMobile ? stylesMobile.headerSeparator : styles.headerSeparator} />
        <h1
          style={{
            textAlign: 'center',
            height: '50vh',
          }}
        >
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}
