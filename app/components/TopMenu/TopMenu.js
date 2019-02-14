import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuComps/MenuButton';
import './styles.css';

/* eslint-disable global-require */
class TopMenu extends Component {
  state = {
    isFixed: false,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const isScrolled = window.scrollY > 0 ? true : false;
    this.setState(state => ({ isFixed: isScrolled }));
  };
  render() {
    const { classes } = this.props;
    const { isFixed } = this.state;
    function LogoImg(props) {
      const isAlternative = props.isAlternative;
      if (isAlternative) {
        return <img
          src={require(`../../images/Cismo.png`)}
          alt="Cismo Solutions"
          style={classes.menuLogoAlt}
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
        style={!isFixed ? classes.menuBody : classes.menuBodyFixed}
        className={"header" + (!isFixed ? "" : " headerFixed")}
      >
        <LogoImg isAlternative={isFixed} />
        <ul style={classes.menu}>
          <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/">
            <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Home</span>
          </MenuButton>
          <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Company">
            <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Company</span>
          </MenuButton>
          <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Services">
            <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Services</span>
          </MenuButton>
          <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Clients">
            <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Clients</span>
          </MenuButton>
          <MenuButton classes={!isFixed ? classes.menuButton : classes.menuButtonFixed} link="/Contact">
            <span className={(!isFixed ? "textButton" : " textButtonFixed")}>Contact</span>
          </MenuButton>
        </ul>
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
