import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './carousel.css';

/* eslint-disable global-require */
class CarouselTestimonials extends Component {
    state = {
        hoverRight: false,
        hoverLeft: false,
        clickRight: false,
        clickLeft: false,
        page: 0,
    };
    onHoverLeft = () => {
        this.setState(state => ({ hoverLeft: !state.hoverLeft }));
    };
    onHoverRight = () => {
        this.setState(state => ({ hoverRight: !state.hoverRight }));
    };
    nextPage = (maxPage) => {
        this.setState(state => ({ page: (state.page === (maxPage - 1) ? 0 : state.page + 1) }));
        this.setState(state => ({ clickRight: true }));
        this.setState(state => ({ clickLeft: false }));
        console.log("Next page");
    };
    backPage = (maxPage) => {
        this.setState(state => ({ page: (state.page === 0 ? (maxPage - 1) : state.page - 1) }));
        this.setState(state => ({ clickRight: false }));
        this.setState(state => ({ clickLeft: true }));
        console.log("Back page");
    };

    render() {
        const { classes, content } = this.props;
        const maxPage = content.length;
        const { hoverLeft, hoverRight, page, clickRight, clickLeft } = this.state;
        return (
            <div style={classes.container}>
                <FontAwesomeIcon
                    onMouseEnter={this.onHoverLeft.bind(this)}
                    onMouseLeave={this.onHoverLeft.bind(this)}
                    onClick={this.backPage.bind(this, maxPage)}
                    style={classes.iconLeft}
                    icon={faChevronLeft}
                    size="2x"
                    className={(!hoverLeft ? "arrow" : " arrowHover")}
                />
                {content.map((item, index) =>
                    <div key={index} style={{ display: (index === page ? "block" : "none") }}>
                        <img
                            src={item.avatar}
                            style={classes.avatar}
                            className={"content" + (clickLeft ? " contentAppearRight" : "") + (clickRight ? " contentAppearRight" : "")}
                        />
                        <p style={classes.quote}>"{item.quote}"</p>
                        <span style={classes.name}>{item.name}</span><br />
                        <span style={classes.profession}>{item.profession}</span><br/>
                        <FontAwesomeIcon
                            style={classes.iconQuote}
                            icon={faQuoteRight}
                            size="2x"
                        />
                    </div>)}
                <FontAwesomeIcon
                    onMouseEnter={this.onHoverRight.bind(this)}
                    onMouseLeave={this.onHoverRight.bind(this)}
                    onClick={this.nextPage.bind(this, maxPage)}
                    style={classes.iconRight}
                    icon={faChevronRight}
                    size="2x"
                    className={(!hoverRight ? "arrow" : " arrowHover")}
                />
            </div>
        );
    }
}
/* eslint-enable global-require */
CarouselTestimonials.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
};

export default CarouselTestimonials;
