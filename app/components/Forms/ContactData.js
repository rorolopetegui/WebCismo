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
                <div>
                    <div style={classes.containerInfo}>
                        <MediaButton
                            classes={classes.containerIcon}
                            link="https://goo.gl/maps/xDWTiFKiaCN2"
                            target="_blank"
                        >
                            <LocationOn style={classes.containerIcon} />
                            Tiburcio Gómez 1331 of. 109, Montevideo, Uruguay
                        </MediaButton>
                    </div>
                    <div style={classes.containerInfo}>
                        <MediaButton
                            classes={classes.containerIcon}
                            link="tel:+59898469728"
                        >
                            <Phone style={classes.containerIcon} />
                            Phone: (+598) 9846 9728
                        </MediaButton>
                    </div>
                    <div style={classes.containerInfo}>
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
        );
    }
}

/* eslint-enable global-require */
ContactData.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ContactData;
