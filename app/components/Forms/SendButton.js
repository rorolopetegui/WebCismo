import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';

/* eslint-disable global-require */
class SendButton extends Component {
    state = {
        hover: false,
    };

    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };
    render() {
        const { classes, children, action, enabled } = this.props;
        const { hover } = this.state;
        return (
            <div
                style={enabled ? classes.container : classes.containerDisable}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
                onClick={enabled ? action : () => {}}
                className={enabled ? (hover ? "buttonHover" : "button") : ""}
            >
                <span style={classes.innerContent}>{children}</span>
            </div>
        );
    }
}
/* eslint-enable global-require */
SendButton.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
    enabled: PropTypes.bool.isRequired,
};

export default SendButton;
