import React, { PureComponent } from 'react';
import Contact from '../../components/Forms/Contact';
import { HeaderBanner } from '../../components/Commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';


const styles = {
  headerSeparator: {
    width: '100%',
    height: '100px',
    backgroundColor: '#F0F8FF',
  },
  headerBanner: {
    container: {
      position: 'relative',
      width: '100%',
      height: '230px',
      background: 'repeating-linear-gradient(45deg, #09202F, #09202F 10px, #071722 10px, #071722 20px)',
      textAlign: 'center',
    },
    sectionTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: '#CCCCCC',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '70px',
      textTransform: 'uppercase',
    },
  },
  contact: {
    container: {
      position: 'relative',
      width: '100%',
      height: '400px',
    },
    containerCentered: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
    },
    input: {
      color: '#192727',
      border: '1px solid #C0C0C0',
      marginLeft: '5%',
      marginBottom: '2%',
      width: '42.5%',
      height: '50px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    inputMessage: {
      color: '#192727',
      border: '1px solid #C0C0C0',
      marginLeft: '5%',
      marginBottom: '2%',
      width: '90%',
      height: '100px',
      paddingLeft: '8px',
      paddingTop: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    button: {
      container: {
        marginLeft: '5%',
        backgroundColor: '#FA5B60',
        width: '180px',
        height: '50px',
        position: 'relative',
      },
      innerContent: {
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '30%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
      /*color: 'white',
      backgroundColor: '#00B0F0',
      border: 'solid 2px #006990',
      borderRadius: '5px',
      textAlign: 'left',
      width: '55px',
      height: '40px',*/
    },
  },
};
/* eslint-disable react/prefer-stateless-function */
export default class ContactPage extends PureComponent {
  render() {
    return (
      <div>
        <div style={styles.headerSeparator} />
        <HeaderBanner classes={styles.headerBanner}>
          <FontAwesomeIcon
            icon={faMailBulk}
            size="1x"
          /><br />
          Make your first contact!
        </HeaderBanner>
        <Contact classes={styles.contact} />
      </div>
    );
  }
}
