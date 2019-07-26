import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuComps/MenuButton';
import './styles.css';
import { isAndroid, isIOS } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable global-require */
class TopMenu extends Component {
  state = {
    isFixed: false,
    displayMenuHidden: false,
    displayMenu: false,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  handleScroll = () => {
    const isScrolled = window.scrollY > 0 ? true : false;
    this.setState(state => ({ isFixed: isScrolled }));
  };
  displayMenu = () => {
    if (!this.state.displayMenu) {
      this.setState(state => ({ displayMenuHidden: !state.displayMenuHidden }));
      setTimeout(() => {
        this.setState(state => ({ displayMenu: !state.displayMenu }));
      }, 100);
    } else {
      this.setState(state => ({ displayMenu: !state.displayMenu }));
      setTimeout(() => {
        this.setState(state => ({ displayMenuHidden: !state.displayMenuHidden }));
      }, 600);
    }
  };
  render() {
    const { classes, engLang } = this.props;
    const { isFixed, displayMenuHidden, displayMenu } = this.state;
    const isMobile = (isAndroid || isIOS ? true : false);
    function LogoImg(props) {
      const isAlternative = props.isAlternative;
      if (isAlternative) {
        return <img
          src={require(`../../images/Cismo.png`)}
          alt="Cismo Solutions"
          style={!isMobile ? classes.menuLogoAlt : classes.menuLogoAltMobile}
        />;
      }
      return <img
        src={require(`../../images/CismoLogoText.png`)}
        alt="Cismo Solutions"
        style={classes.menuLogo}
      />;
    }
    return (
      <div
        className={"header" + (!isFixed ? "" : " headerFixed")}
      >
        <LogoImg isAlternative={isFixed || isMobile} />
        {isMobile &&
          <div>
            <div
              style={{
                position: 'absolute',
                right: '15%',
                top: '15%',
              }}
            >
              <img
                src={require(`../../images/SpanishFlag.png`)}
                alt="English Language"
                style={{
                  width: '1.5rem',
                  marginRight: '0.75rem',
                  cursor: 'pointer',
                }}
                onClick={this.props.onHandleLang.bind(this, "esp")}
              />
              <img
                src={require(`../../images/EnglishFlag.png`)}
                alt="English Language"
                style={{
                  width: '1.5rem',
                  marginRight: '0.75rem',
                  cursor: 'pointer',
                }}
                onClick={this.props.onHandleLang.bind(this, "eng")}
              />
            </div>
            <div style={isFixed ? classes.iconMobileFixed : classes.iconMobile} onClick={this.displayMenu.bind(this)}>
              <FontAwesomeIcon
                icon={faBars}
                size="3x"
              />
            </div>
            <div className={displayMenu ? "mobileDisplayMenu" : (displayMenuHidden ? "mobileDisplayMenuHidden" : "mobileDisplayMenuNone")}>
              <MenuButton classes={classes.menuButtonMobile} link="/">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Home</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Company">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "About Us" : "Empresa" }</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Services">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "Services" : "Servicios" }</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Clients">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "Clients" : "Clientes" }</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Contact">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "Contact" : "Contacto" }</span>
              </MenuButton>
            </div>
          </div>
        }
        {!isMobile &&
          <ul style={classes.menu}>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Home</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Company">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "About Us" : "Empresa" }</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Services">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "Services" : "Servicios" }</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Clients">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "Clients" : "Clientes" }</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Contact">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>{engLang ? "Contact" : "Contacto" }</span>
            </MenuButton>
            <div
              style={{
                float: 'left',
                padding: '10px',
              }}
            >
              <img
                src={require(`../../images/SpanishFlag.png`)}
                alt="English Language"
                style={{
                  width: '1.5rem',
                  marginRight: '0.75rem',
                  float: 'left',
                  cursor: 'pointer',
                }}
                onClick={this.props.onHandleLang.bind(this, "esp")}
              />
              <img
                src={require(`../../images/EnglishFlag.png`)}
                alt="English Language"
                style={{
                  width: '1.5rem',
                  marginRight: '0.75rem',
                  float: 'left',
                  cursor: 'pointer',
                }}
                onClick={this.props.onHandleLang.bind(this, "eng")}
              />
            </div>
          </ul>
        }
      </div>
    );
  }
}
/* eslint-enable global-require */
TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onHandleLang: PropTypes.func.isRequired,
  children: PropTypes.node,
  engLang: PropTypes.bool.isRequired
};

export default TopMenu;
