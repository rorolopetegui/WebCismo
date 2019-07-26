import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initialState, changeLanguage } from '../../reducers/pageState'
import { TopMenu } from '../../components'

const styles = {
  iconMobile: {
    //float: 'right',
    //backgroundColor: 'red',
    //padding: '3.5%',
    position: 'absolute',
    right: '5%',
    top: '15%',
  },
  iconMobileFixed: {
    position: 'absolute',
    right: '5%',
    top: '15%',
    color: 'white',
  },
  menuButtonMobile: {
    button: {
      width: '100%',
      float: 'left',
      textTransform: 'uppercase',
      listStyleType: 'none',
      backgroundColor: 'rgba(186,191,187,0.85)',
    },
    buttonHover: {
      width: '100%',
      float: 'left',
      textTransform: 'uppercase',
      listStyleType: 'none',
      backgroundColor: 'rgba(148,152,149,0.85)',
    },
    link: {
      display: 'block',
      color: '#001433',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
    linkHover: {
      display: 'block',
      color: '#001433',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
  },
  menu: {
    listStyleType: 'none',
    paddingRight: '2%',
    float: 'right',
    position: 'relative',
  },
  menuButton: {
    button: {
      float: 'left',
      marginLeft: '10px',
      textTransform: 'uppercase',
    },
    buttonHover: {
      float: 'left',
      marginLeft: '10px',
      color: '#FA5B60',
      textTransform: 'uppercase',
    },
    link: {
      display: 'block',
      color: '#001433',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
    linkHover: {
      display: 'block',
      color: '#FA5B60',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
  },
  menuButtonFixed: {
    button: {
      float: 'left',
      marginLeft: '10px',
      textTransform: 'uppercase',
    },
    buttonHover: {
      float: 'left',
      marginLeft: '10px',
      textTransform: 'uppercase',
    },
    link: {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
    linkHover: {
      display: 'block',
      color: '#FA5B60',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
    },
  },
  menuLogo: {
    width: '180px',
    float: 'left',
    margin: '20px',
    marginLeft: '5%',
  },
  menuLogoAlt: {
    width: '65px',
    float: 'left',
    marginLeft: '10%',
    //marginTop: '0.5%',
  },
  menuLogoAltMobile: {
    width: '65px',
    float: 'left',
    marginLeft: '1%',
    //marginTop: '0.5%',
  },
}

/* eslint-disable react/prefer-stateless-function */
class TopMenuCont extends React.PureComponent {
  onChangeLang = (selectedLang) => {
    this.props.changeLanguage(selectedLang === "eng")
  }
  render() {
    return <TopMenu engLang={this.props.englishLang} onHandleLang={this.onChangeLang} classes={styles} />
  }
}

TopMenuCont.propTypes = {
  englishLang: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  const p = state.get('pageState', initialState)
  return {
    englishLang: p.englishLang,
  }
}


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeLanguage
    },
    dispatch,
  )


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopMenuCont)