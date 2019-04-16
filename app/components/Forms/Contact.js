import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendButton from './SendButton';
import axios from 'axios';
var Recaptcha = require('react-recaptcha');

const API_PATH = 'http://159.65.177.147:8081/index.php';

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
        remarkName: false,
        remarkEmail: false,
        remarkMessage: false,
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
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    requiredEntry() {
        this.setState({ remarkName: false, remarkEmail: false, remarkMessage: false, error: "" });
        if (this.state.fname === "" || (this.state.email === "") || this.state.message === "") {
            this.setState({ remarkName: true, remarkEmail: true, remarkMessage: true, error: "*Rellene todos los campos obligatorios" });
            return false;
        }
        if (!this.validateEmail(this.state.email)) {
            this.setState({ remarkEmail: true, error: "Ingrese un mail correcto" });
            return false;
        }
        return true;
    }
    submit(event) {
        if (this.requiredEntry()) {
            console.log("Sending");
            if (this.state.isVerified && !this.state.mailSent) {
                axios({
                    method: 'post',
                    url: `${API_PATH}`,
                    headers: { 'content-type': 'application/json' },
                    data: this.state
                })
                    .then(result => {
                        this.setState({
                            mailSent: true
                        });
                        console.log("Sended: " + result.data.sent);
                        console.log(result);
                    })
                    .catch(error => { this.setState({ error: error.message }); console.log("Error: " + error); });
            } else {
                if (this.state.mailSent)
                    this.setState({ error: "Usted ya envío un mail, refresque en caso de querer enviar otro" });
                else
                    this.setState({ error: "Primero verifique que no es un robot" });
            }
        }
    }

    verifiedCaptcha(response) {
        if (response) {
            this.setState({ isVerified: true });
        }
    }
    render() {
        const { classes } = this.props;
        const { mailSent, remarkName, remarkEmail, remarkMessage, error } = this.state;
        return (
            <div style={classes.container}>
                <div style={classes.containerCentered}>
                    <input
                        style={!remarkName ? classes.input : classes.inputRemarked}
                        type="text"
                        value={this.state.fname}
                        placeholder={"Mi nombre es"}
                        onChange={this.handleChangeName.bind(this)} />
                    <input
                        style={!remarkEmail ? classes.input : classes.inputRemarked}
                        type="text"
                        value={this.state.email}
                        placeholder={"Me pueden enviar un mail a"}
                        onChange={this.handleChangeEmail.bind(this)} />
                    <select
                        style={classes.input}
                        onChange={this.handleChangeReason.bind(this)}
                    >
                        <option value="Hire">Contratar a Cismo</option>
                        <option value="Work">Trabajar con nostros</option>
                        <option value="Quote">Presupuesto</option>
                        <option value="Question">Solo una pregunta</option>
                    </select>
                    <input
                        style={classes.input}
                        type="text"
                        value={this.state.phone}
                        placeholder={"Ring me at (optional)"}
                        onChange={this.handleChangePhone.bind(this)} />
                    <textarea
                        style={!remarkMessage ? classes.inputMessage : classes.inputMessageRemarked}
                        value={this.state.message}
                        placeholder={"I got something to add"}
                        onChange={this.handleChangeMessage.bind(this)} />
                    <Recaptcha
                        sitekey="6LcVOJIUAAAAAMhET3rdbFoTm4oUwTFro9peeTWB"
                        render="explicit"
                        verifyCallback={this.verifiedCaptcha.bind(this)}
                        style={classes.captcha}
                    />
                    <SendButton classes={classes.button} action={this.submit.bind(this)} enabled={true}>
                        Log In
                    </SendButton>
                    <span style={(remarkName || remarkEmail || remarkMessage || error !== null) ? classes.spanMessage : classes.spanMessageHidden}>{error}</span>
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
