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
    const { classes } = this.props;
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
            <div style={isFixed ? classes.iconMobileFixed : classes.iconMobile} onClick={this.displayMenu.bind(this)}>
              <FontAwesomeIcon
                icon={faBars}
                size="3x"
              />
            </div>
            <div className={displayMenu ? "mobileDisplayMenu" : (displayMenuHidden ? "mobileDisplayMenuHidden" : "mobileDisplayMenuNone")}>
              <MenuButton classes={classes.menuButtonMobile} link="/">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Inicio</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Company">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Empresa</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Services">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Servicios</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Clients">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Clientes</span>
              </MenuButton>
              <MenuButton classes={classes.menuButtonMobile} link="/Contact">
                <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Contacto</span>
              </MenuButton>
            </div>
          </div>
        }
        {!isMobile &&
          <ul style={classes.menu}>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Inicio</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Company">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Empresa</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Services">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Servicios</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Clients">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Clientes</span>
            </MenuButton>
            <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Contact">
              <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Contacto</span>
            </MenuButton>
          </ul>
        }
      </div>
    );
  }
}
/* eslint-enable global-require */
TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default TopMenu;
