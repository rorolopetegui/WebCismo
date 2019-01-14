import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';

/* eslint-disable global-require */
class Carousel extends Component {
    render() {
        const { classes, content } = this.props;
        return (
            <div style={classes.container}>
                <Slider>
                    {content.map((article, index) =>
                        <div key={index}
                            style={{ backgroundImage: `url('${article.image}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}
                        >
                            <h1 style={classes.title}>{article.title}</h1>
                            <p style={classes.description}>{article.description}</p>
                        </div>)}
                </Slider>
            </div>
        );
    }
}
/* eslint-enable global-require */
Carousel.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
};

export default Carousel;
