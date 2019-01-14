import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Carousel/Carousel';
const content = [
  {
      title: 'Vulputate Mollis Ultricies Fermentum Parturient',
      description:
          'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      image: 'https://i.imgur.com/gM8y1yS.jpg',
  },
  {
      title: 'Tortor Dapibus Commodo Aenean Quam',
      description:
          'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
      image: 'https://i.imgur.com/61k7YN6.jpg',
  },
  {
      title: 'Phasellus volutpat metus',
      description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      image: 'https://i.imgur.com/TxEJcKj.jpg',
  }
];
/* eslint-disable global-require */
const HomeComponent = props => {
  const { children, classes } = props;
  return (
    <div>
      <Carousel classes={classes.carousel} content={content} />
    </div>
  );
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default HomeComponent;
