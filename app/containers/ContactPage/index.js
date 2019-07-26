import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initialState } from '../../reducers/pageState'
import Contact from '../../components/Forms/Contact';
import { HeaderBanner } from '../../components/Commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { isAndroid, isIOS } from 'react-device-detect';
import { Helmet } from "react-helmet";


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
      marginBottom: '2%',
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
      height: '500px',
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
      marginRight: '5%',
      marginBottom: '2%',
      width: '42.5%',
      height: '50px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    inputRemarked: {
      color: '#192727',
      border: '1px solid #F6546A',
      marginRight: '5%',
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
      marginBottom: '2%',
      width: '90%',
      height: '100px',
      paddingLeft: '8px',
      paddingTop: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    inputMessageRemarked: {
      color: '#192727',
      border: '1px solid #F6546A',
      marginBottom: '2%',
      width: '90%',
      height: '100px',
      paddingLeft: '8px',
      paddingTop: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    captcha: {
      marginLeft: '25px',
    },
    spanMessage: {
      color: '#F6546A',
      margin: '3%',
      float: 'left',
    },
    spanMessageHidden: {
      display: 'none',
    },
    button: {
      container: {
        marginTop: '15px',
        backgroundColor: '#05697B',
        width: '180px',
        height: '50px',
        position: 'relative',
        float: 'left',
      },
      containerDisable: {
        marginTop: '15px',
        backgroundColor: '#A39E98',
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
    },
  },
};
const stylesMobile = {
  headerSeparator: {
    width: '100%',
    height: '70px',
    backgroundColor: '#F0F8FF',
  },
  headerBanner: {
    container: {
      position: 'relative',
      width: '100%',
      height: '200px',
      background: 'repeating-linear-gradient(45deg, #09202F, #09202F 10px, #071722 10px, #071722 20px)',
      textAlign: 'center',
      marginBottom: '2%',
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
      fontSize: '60px',
      textTransform: 'uppercase',
    },
  },
  contact: {
    container: {
      position: 'relative',
      width: '100%',
      height: '600px',
    },
    containerCentered: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
    },
    input: {
      color: '#192727',
      border: '1px solid #C0C0C0',
      marginRight: '5%',
      marginBottom: '2%',
      width: '100%',
      height: '50px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    inputRemarked: {
      color: '#192727',
      border: '1px solid #F6546A',
      marginRight: '5%',
      marginBottom: '2%',
      width: '100%',
      height: '50px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    inputMessage: {
      color: '#192727',
      border: '1px solid #C0C0C0',
      marginBottom: '2%',
      width: '100%',
      height: '100px',
      paddingLeft: '8px',
      paddingTop: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    inputMessageRemarked: {
      color: '#192727',
      border: '1px solid #F6546A',
      marginBottom: '2%',
      width: '100%',
      height: '100px',
      paddingLeft: '8px',
      paddingTop: '8px',
      fontFamily: 'Roboto',
      fontSize: '15px',
    },
    captcha: {
      marginLeft: '25px',
    },
    spanMessage: {
      color: '#F6546A',
      margin: '3%',
      float: 'left',
    },
    spanMessageHidden: {
      display: 'none',
    },
    button: {
      container: {
        marginTop: '15px',
        backgroundColor: '#05697B',
        width: '180px',
        height: '50px',
        position: 'relative',
        float: 'left',
      },
      containerDisable: {
        marginTop: '15px',
        backgroundColor: '#A39E98',
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
    },
  },
};
/* eslint-disable react/prefer-stateless-function */
class ContactPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const isMobile = (isAndroid || isIOS ? true : false);
    const { englishLang } = this.props;
    return (
      <div>
        <Helmet>
          <title>{englishLang ? "Contact" : "Contacto"} - Cismo Solutions</title>
          <meta name="description" content="Solicita tu presupuesto sin costo!" />
        </Helmet>
        <div style={isMobile ? stylesMobile.headerSeparator : styles.headerSeparator} />
        <HeaderBanner classes={isMobile ? stylesMobile.headerBanner : styles.headerBanner}>
          <FontAwesomeIcon
            icon={faMailBulk}
            size="1x"
          /><br />
          {isMobile && <span>{englishLang ? "Contact" : "Contacto"}</span>}
          {!isMobile && <span>{englishLang ? "Make the first contact!" : "Haz tu primer contacto!"}</span>}
        </HeaderBanner>
        <Contact engLang={englishLang} classes={isMobile ? stylesMobile.contact : styles.contact} />
      </div>
    );
  }
}
ContactPage.propTypes = {
  englishLang: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  const p = state.get('pageState', initialState)
  return {
    englishLang: p.englishLang,
  }
}



export default connect(
  mapStateToProps,
  null,
)(ContactPage)