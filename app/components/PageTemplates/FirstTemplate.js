import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
const FirstTemplate = props => {
    const { classes, headerTitle, content, children } = props;
    return (
        <div style={classes.body}>
            <div style={classes.bodyContent}>
                <div style={classes.titleContainer}>
                    <span style={classes.titleSection}>{headerTitle}</span>
                </div>
                {content.map((item, index) =>
                    <div key={index} style={classes.contentContainer}>
                        <div style={classes.imgContainer} className={item.isImgLeft ? "alignLeft" : "alignRight"}>
                            <div style={classes.imgContainerCentered}>
                                <div style={classes.overlayImg}></div>
                                <img src={item.img} style={classes.img} className="imgCover" />
                            </div>
                        </div>
                        <div style={classes.textContainer} className={!item.isImgLeft ? "alignLeft" : "alignRight"}>
                            <div style={classes.textContainerCentered}>
                                <span style={classes.textTitle}>{item.title}</span>
                                <span style={classes.textDesc}>{item.text}</span>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            {children}
        </div>
    );
};
/* eslint-enable global-require */
FirstTemplate.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    headerTitle: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired
};

export default FirstTemplate;
