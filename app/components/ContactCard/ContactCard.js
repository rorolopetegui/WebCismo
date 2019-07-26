import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isAndroid, isIOS } from 'react-device-detect';
/* eslint-disable global-require */
class ContactCard extends Component {
    render() {
        const { classes, engLang } = this.props;
        const isMobile = (isAndroid || isIOS ? true : false);
        return (
            <div style={classes.containerVideo}>
                <div style={classes.overlayVideo}></div>
                {!isMobile &&
                    <video style={classes.backgroundVideo} loop autoPlay muted>
                        <source src="https://cismosolutions.com/api/videos/Typing+Dark.mp4" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                }
                {isMobile &&
                    <video style={classes.backgroundVideo} loop autoPlay muted>
                        <source src="https://cismosolutions.com/api/videos/Typing+Dark+Portrait.mp4" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                }
                {!engLang &&
                    <div>
                        <h1 style={classes.title}>Creando soluciones simples a problemas complejos</h1>
                        <h3 style={classes.subtitle}>Cismo es una empresa de desarrollo de software ubicada en Montevideo, Uruguay.
                            <br />Nos especializamos en software y soluciones informáticas a pedido de nuestros clientes.
                            <br />Además, ayudamos a clientes con páginas web y ecommerce a desarrollar sus marcas a través del marketing digital.
                            Muchos de nuestros clientes a largo plazo deciden solicitar la creación de una página web y crecen a través de un proceso continuo de posicionamiento utilizando SEO & Google Ads/PCP
                        </h3>
                        <h2 style={classes.contact}>Contactenos - (+598) 9230 8380 o vía mail: info@cismosolutions.com</h2>
                    </div>
                }
                {engLang &&
                    <div>
                        <h1 style={classes.title}>Creating simple solutions to complex problems</h1>
                        <h3 style={classes.subtitle}>Cismo is a software development company located in Montevideo, Uruguay.
                            <br />We specialize in software and computer solutions at the request of our customers.
                            <br />In addition, we help clients with web pages and ecommerce to develop their brands through digital marketing.
                            Many of our long-term clients decide to request the creation of a web page and grow through a continuous positioning process using SEO & Google Ads / PCP
                        </h3>
                        <h2 style={classes.contact}>Contact us - (+598) 9230 8380 mail: info@cismosolutions.com</h2>
                    </div>
                }
            </div>
        );
    }
}
/* eslint-enable global-require */
ContactCard.propTypes = {
    classes: PropTypes.object.isRequired,
    engLang: PropTypes.bool.isRequired
};

export default ContactCard;
