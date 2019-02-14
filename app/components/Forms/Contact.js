import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
class Contact extends Component {
    state = {
        fullname: "",
        mail: '',
        phone: '',
        message: "",
    };

    handleChangeName(event) {
        this.setState({ fullname: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ mail: event.target.value });
    }

    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    submit(event) {
        console.log("Submit");
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={classes.container}>
                <div style={classes.containerCentered}>
                    <input
                        style={classes.input}
                        type="text"
                        value={this.state.fullname}
                        placeholder={"My name is"}
                        onChange={this.handleChangeName.bind(this)} />
                    <input
                        style={classes.input}
                        type="text"
                        value={this.state.mail}
                        placeholder={"You can email me at"}
                        onChange={this.handleChangeEmail.bind(this)} />
                    <input
                        style={classes.input}
                        type="text"
                        value={this.state.mail}
                        placeholder={"You can email me at"}
                        onChange={this.handleChangeEmail.bind(this)} />
                    <input
                        style={classes.input}
                        type="text"
                        value={this.state.phone}
                        placeholder={"Ring me at (optional)"}
                        onChange={this.handleChangePhone.bind(this)} />
                    <textarea
                        style={classes.inputMessage}
                        value={this.state.message}
                        placeholder={"I got something to add"}
                        onChange={this.handleChangeMessage.bind(this)} />
                    <input
                        style={classes.button}
                        type="button"
                        value="Send"
                        onClick={this.submit.bind(this)} />
                </div>
            </div>
        );
    }
}

/* eslint-enable global-require */
Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Contact;
