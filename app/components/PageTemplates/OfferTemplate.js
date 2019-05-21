import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendButton from '../Forms/SendButton';

/* eslint-disable global-require */
class FirstTemplate extends Component {
    onSubmit = () => {
        window.location.assign('/contact');
    }
    render() {
        const { classes, title, subtitle, excluded, contractBtn, callMeTitle, callMeBtn, offers, children } = this.props;
        return (
            <div style={classes.body}>
                <div style={classes.titleSection}>
                    <h1 style={classes.title}>{title}</h1>
                    <h3 style={classes.subtitle}>{subtitle}</h3>
                </div>
                <div style={classes.offers}>
                    {offers.map((item, index) =>
                        <div key={index} style={classes.offer} >
                            <h2 style={classes.offer.title}>{item.title}</h2>
                            <span style={classes.offer.price}>{item.price}<span style={classes.offer.priceIva}> +iva*</span></span>
                            {item.services.map((service, iService) =>
                                <div key={iService} style={classes.offer.descService}>
                                    <span style={classes.offer.nameService}>{service.name}</span>
                                    <span style={classes.offer.descService}>{service.desc}</span>
                                </div>
                            )}
                            <div style={classes.buttonContainer}>
                                <SendButton classes={classes.hireButton} action={this.onSubmit.bind(this)} enabled={true}>
                                    {contractBtn}
                                </SendButton>
                            </div>
                        </div>
                    )}
                </div>
                <div style={classes.notIncluded}>
                    {excluded}
                </div>
                <div style={classes.bannerContainer}>
                    <span style={classes.bannerTitle}>{callMeTitle}</span>
                    <SendButton classes={classes.ideasContact} action={this.onSubmit.bind(this)} enabled={true}>
                        {callMeBtn}
                    </SendButton>
                </div>
            </div>
        );
    }
};
/* eslint-enable global-require */
FirstTemplate.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    excluded: PropTypes.string.isRequired, 
    contractBtn: PropTypes.string.isRequired, 
    callMeTitle: PropTypes.string.isRequired, 
    callMeBtn: PropTypes.string.isRequired,
    offers: PropTypes.array.isRequired,
};

export default FirstTemplate;
