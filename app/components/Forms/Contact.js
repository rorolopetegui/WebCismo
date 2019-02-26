import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendButton from './SendButton';
import axios from 'axios';
var Recaptcha = require('react-recaptcha');

const API_PATH = 'https://localhost:8081/index.php';

/* eslint-disable global-require */
class Contact extends Component {
    state = {
        fname: 'Rodrigo',
        email: 'rlopetegui',
        reason: 'Hire',
        phone: '',
        message: "Hi there",
        mailSent: false,
        error: null,
        isVerified: true,
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
                        mailSent: result.data.sent
                    });
                    console.log("Sended");
                })
                .catch(error => {this.setState({ error: error.message }); console.log("Error");});
        } else {
            if (this.state.mailSent)
                alert("Usted ya envío un mail, refresque en caso de querer enviar otro");
            else
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
                        placeholder={"Mi nombre es"}
                        onChange={this.handleChangeName.bind(this)} />
                    <input
                        style={classes.input}
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
                        Enviar
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
