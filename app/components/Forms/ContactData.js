import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocationOn, Phone, Email } from '@material-ui/icons';
import MediaButton from '../MenuComps/MediaButton';

/* eslint-disable global-require */
class ContactData extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={classes.container}>
                <div >
                    <div style={classes.containerInfo}>
                        <div style={classes.centerContent}>
                            <MediaButton
                                classes={classes.containerIcon}
                                link="https://goo.gl/maps/v6XVi81tYAq"
                                target="_blank"
                            >
                                <LocationOn style={classes.containerIcon} />
                                Tiburcio Gómez 1329 of. 109, Montevideo, Uruguay
                        </MediaButton>
                        </div>
                    </div>
                    <div style={classes.containerInfo}>
                        <div style={classes.centerContent}>
                            <MediaButton
                                classes={classes.containerIcon}
                                link="tel:+59892308380"
                            >
                                <Phone style={classes.containerIcon} />
                                Teléfono: (+598) 9230 8380
                        </MediaButton>
                        </div>
                    </div>
                    <div style={classes.containerInfo}>
                        <div style={classes.centerContent}>
                            <MediaButton
                                classes={classes.containerIcon}
                                link="mailto:info@cismosolutions.com"
                            >
                                <Email style={classes.containerIcon} />
                                Email: info@cismosolutions.com
                        </MediaButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/* eslint-enable global-require */
ContactData.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ContactData;
