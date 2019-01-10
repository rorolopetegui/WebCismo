import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
class Contact extends Component {
    state = {
        fullname: "",
        mail: '',
        message: "",
    };

    handleChangeName(event) {
        this.setState({ fullname: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ mail: event.target.value });
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
                <div>
                    <div>
                        Full Name
                    </div>
                    <div>
                        <input
                            style={classes.input}
                            type="text"
                            value={this.state.fullname}
                            onChange={this.handleChangeName.bind(this)} />
                    </div>
                </div>
                <div>
                    <div>
                        Email
                    </div>
                    <div>
                        <input
                            style={classes.input}
                            type="text"
                            value={this.state.mail}
                            onChange={this.handleChangeEmail.bind(this)} />
                    </div>
                </div>
                <div>
                    <div>
                        <div>Message</div>
                        <div>
                            <textarea
                                style={classes.inputMessage}
                                value={this.state.message}
                                onChange={this.handleChangeMessage.bind(this)} />
                        </div>
                    </div>
                    <div>
                        <input
                            style={classes.button}
                            type="button"
                            value="Send"
                            onClick={this.submit.bind(this)} />
                    </div>
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
