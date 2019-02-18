import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendButton from './SendButton';
import axios from 'axios';
var Recaptcha = require('react-recaptcha');

const API_PATH = 'http://localhost:81/CismoWeb/index.php';

/* eslint-disable global-require */
class Contact extends Component {
    state = {
        fname: '',
        email: '',
        reason: 'Hire',
        phone: '',
        message: "",
        mailSent: false,
        error: null,
        isVerified: false,
    };

    handleChangeName(event) {
        this.setState({ fname: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangeReason(event) {
        this.setState({ reason: event.target.value });
    }

    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    submit(event) {
        if (this.state.isVerified) {
            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: this.state
            })
                .then(result => {
                    this.setState({
                        mailSent: result.data.sent
                    });
                })
                .catch(error => this.setState({ error: error.message }));
        } else {
            alert("Primero verifique que no es un robot");
        }
    }

    verifiedCaptcha(response) {
        if (response) {
            this.setState({ isVerified: true });
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div style={classes.container}>
                <div style={classes.containerCentered}>
                    <input
                        style={classes.input}
                        type="text"
                        value={this.state.fname}
                        placeholder={"My name is"}
                        onChange={this.handleChangeName.bind(this)} />
                    <input
                        style={classes.input}
                        type="text"
                        value={this.state.email}
                        placeholder={"You can email me at"}
                        onChange={this.handleChangeEmail.bind(this)} />
                    <select
                        style={classes.input}
                        onChange={this.handleChangeReason.bind(this)}
                    >
                        <option value="Hire">Hire Cismo</option>
                        <option value="Work">Work With Us</option>
                        <option value="Quote">Get A Quote</option>
                        <option value="Question">Just a Question</option>
                    </select>
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
                    <Recaptcha
                        sitekey="6LcVOJIUAAAAAMhET3rdbFoTm4oUwTFro9peeTWB"
                        render="explicit"
                        verifyCallback={this.verifiedCaptcha.bind(this)}
                        style={classes.captcha}
                    />
                    <SendButton classes={classes.button} action={this.submit.bind(this)} >
                        Send now
                    </SendButton>
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
