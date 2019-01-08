import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
class MediaButton extends Component {
  state = {
    hover: false,
  };

  onMouseEnter = () => {
    this.setState(state => ({ hover: !state.hover }));
  };

  render() {
    const { classes, children, link, target } = this.props;
    const { hover } = this.state;
    return (
      <a
        style={hover ? classes.buttonHover : classes.button}
        href={link}
        target={target}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseEnter.bind(this)}
      >
        {children}
      </a>
    );
  }
}
/* eslint-enable global-require */
MediaButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default MediaButton;
