import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isAndroid, isIOS } from 'react-device-detect';
/* eslint-disable global-require */
class ContactCard extends Component {
    render() {
        const { classes } = this.props;
        const isMobile = (isAndroid || isIOS ? true : false);
        return (
            <div style={classes.containerVideo}>
                <div style={classes.overlayVideo}></div>
                {!isMobile &&
                    <video style={classes.backgroundVideo} loop autoPlay muted>
                        <source src="http://159.65.177.147:8081/videos/Typing+Dark.mp4" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                }
                {isMobile &&
                    <video style={classes.backgroundVideo} loop autoPlay muted>
                        <source src="http://159.65.177.147:8081/videos/Typing+Dark+Portrait.mp4" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                }
                <span style={classes.title}>Creando soluciones simples a problemas complejos</span>
                <span style={classes.subtitle}>Cismo es una empresa de desarrollo de software ubicada en Montevideo, Uruguay.
                    <br />Nos especializamos en software y soluciones informáticas a pedido de nuestros clientes.
                            <br />Además, ayudamos a clientes con páginas web y ecommerce a desarrollar sus marcas a través del marketing digital.
                    Muchos de nuestros clientes a largo plazo deciden solicitar la creación de una página web y crecen a través de un proceso continuo de posicionamiento utilizando SEO & Google Ads/PCP
                </span>
                <span style={classes.contact}>Contactenos - (+598) 9846 9728 o vía mail: info@cismosolutions.com</span>
            </div>
        );
    }
}
/* eslint-enable global-require */
ContactCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ContactCard;
