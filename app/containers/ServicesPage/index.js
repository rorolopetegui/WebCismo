import React, { PureComponent } from 'react';
import { FirstTemplate } from '../../components';
import { HeaderBanner } from '../../components/Commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const styles = {
  headerSeparator: {
    width: '100%',
    height: '100px',
    backgroundColor: '#F0F8FF',
  },
  headerBanner: {
    container: {
      position: 'relative',
      width: '100%',
      height: '230px',
      background: 'repeating-linear-gradient(45deg, #09202F, #09202F 10px, #071722 10px, #071722 20px)',
      textAlign: 'center',
    },
    sectionTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: '#CCCCCC',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '70px',
      textTransform: 'uppercase',
    },
  },
  headerDevelopmentPlataforms: {
    container: {
      position: 'relative',
      marginTop: '5%',
      width: '100%',
      height: '250px',
      backgroundColor: '#09202F',
    },
    sectionTitle: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: '#CCCCCC',
      fontFamily: 'Roboto',
      letterSpacing: '0.2px',
      lineHeight: '65px',
      fontWeight: '900',
      fontSize: '40px',
      textTransform: 'uppercase',
    },
  },
  body: {
    backgroundColor: '#F0F8FF',
  },
  bodyContent: {
    position: 'relative',
    width: '95%',
  },
  titleContainer: {
    //zIndex: '50000',
    //backgroundColor: 'red',
    position: 'absolute',
    width: '5%',
    height: '100%',
    left: '0',
  },
  titleSection: {
    zIndex: '1000',
    color: '#373831',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '40px',
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: '100% 100%',
  },
  contentContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '650px',
    overflow: 'hidden',
    marginLeft: '5%',
  },
  imgContainer: {
    //backgroundColor: 'red',
    width: '50%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  imgContainerCentered: {
    width: '105%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  textContainer: {
    width: '50%',
    height: '100%',
    position: 'relative',
  },
  textContainerCentered: {
    width: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  textTitle: {
    width: '100%',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '20px',
    color: '#FA5B60',
  },
  textDesc: {
    width: '100%',
    float: 'left',
    color: '#5B5B5B',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
  },
  overlayImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '100',
  },
  secondPart: {
    body: {
      backgroundColor: '#F0F8FF',
    },
    bodyContent: {
      position: 'relative',
      width: '80%',
      marginLeft: '5%',
      marginTop: '-7%',
    },
    titleContainer: {
      //zIndex: '50000',
      //backgroundColor: 'red',
      position: 'absolute',
      width: '5%',
      height: '100%',
      left: '0',
    },
    titleSection: {
      zIndex: '1000',
      color: '#373831',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '40px',
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'rotate(-90deg)',
      transformOrigin: '100% 100%',
    },
    contentContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '350px',
      overflow: 'hidden',
      marginLeft: '5%',
    },
    imgContainer: {
      //backgroundColor: 'red',
      width: '50%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    imgContainerCentered: {
      width: '105%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    textContainer: {
      width: '50%',
      height: '100%',
      position: 'relative',
      backgroundColor: '#071722',
    },
    textContainerCentered: {
      width: '80%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    textTitle: {
      width: '100%',
      fontFamily: 'Lato',
      fontWeight: '900',
      fontSize: '20px',
      color: '#FA5B60',
    },
    textDesc: {
      width: '100%',
      float: 'left',
      color: 'white',
    },
    img: {
      width: '100%',
      objectFit: 'cover',
    },
    overlayImg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: '100',
    },
  },
};
const content = [
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/UqAfVas.jpg',
    title: 'Some Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur volutpat aliquet. Curabitur ultricies ornare massa sed iaculis. Vestibulum et interdum orci, id pellentesque est. Morbi id urna non metus commodo blandit. Nulla sit amet quam at ipsum maximus consectetur. Nam pellentesque enim sodales sem faucibus, rutrum volutpat purus ornare. Maecenas porta leo in nunc laoreet bibendum. Suspendisse felis magna, aliquet vitae pretium ornare, dictum nec quam. Aliquam enim ipsum, gravida vitae nunc sed, luctus efficitur metus. Donec in semper magna. Morbi nec porta diam, a molestie dui. Phasellus eget lacus eleifend, iaculis nisl tristique, tempor urna. Aliquam quis felis orci. Sed lorem diam, gravida vitae leo sed, posuere laoreet nibh.',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/UqAfVas.jpg',
    title: 'Some Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur volutpat aliquet. Curabitur ultricies ornare massa sed iaculis. Vestibulum et interdum orci, id pellentesque est. Morbi id urna non metus commodo blandit. Nulla sit amet quam at ipsum maximus consectetur. Nam pellentesque enim sodales sem faucibus, rutrum volutpat purus ornare. Maecenas porta leo in nunc laoreet bibendum. Suspendisse felis magna, aliquet vitae pretium ornare, dictum nec quam. Aliquam enim ipsum, gravida vitae nunc sed, luctus efficitur metus. Donec in semper magna. Morbi nec porta diam, a molestie dui. Phasellus eget lacus eleifend, iaculis nisl tristique, tempor urna. Aliquam quis felis orci. Sed lorem diam, gravida vitae leo sed, posuere laoreet nibh.',
  },
];
const content2 = [
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/UqAfVas.jpg',
    title: 'Some Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur volutpat aliquet. Curabitur ultricies ornare massa sed iaculis. Vestibulum et interdum orci, id pellentesque est. Morbi id urna non metus commodo blandit. Nulla sit amet quam at ipsum maximus consectetur. Nam pellentesque enim sodales sem faucibus, rutrum volutpat purus ornare. Maecenas porta leo in nunc laoreet bibendum. Suspendisse felis magna, aliquet vitae pretium ornare, dictum nec quam. Aliquam enim ipsum, gravida vitae nunc sed, luctus efficitur metus. Donec in semper magna. Morbi nec porta diam, a molestie dui. Phasellus eget lacus eleifend, iaculis nisl tristique, tempor urna. Aliquam quis felis orci. Sed lorem diam, gravida vitae leo sed, posuere laoreet nibh.',
  },
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/UqAfVas.jpg',
    title: 'Some Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur volutpat aliquet. Curabitur ultricies ornare massa sed iaculis. Vestibulum et interdum orci, id pellentesque est. Morbi id urna non metus commodo blandit. Nulla sit amet quam at ipsum maximus consectetur. Nam pellentesque enim sodales sem faucibus, rutrum volutpat purus ornare. Maecenas porta leo in nunc laoreet bibendum. Suspendisse felis magna, aliquet vitae pretium ornare, dictum nec quam. Aliquam enim ipsum, gravida vitae nunc sed, luctus efficitur metus. Donec in semper magna. Morbi nec porta diam, a molestie dui. Phasellus eget lacus eleifend, iaculis nisl tristique, tempor urna. Aliquam quis felis orci. Sed lorem diam, gravida vitae leo sed, posuere laoreet nibh.',
  },
  {
    isImgLeft: false,
    img: 'https://i.imgur.com/UqAfVas.jpg',
    title: 'Some Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur volutpat aliquet. Curabitur ultricies ornare massa sed iaculis. Vestibulum et interdum orci, id pellentesque est. Morbi id urna non metus commodo blandit. Nulla sit amet quam at ipsum maximus consectetur. Nam pellentesque enim sodales sem faucibus, rutrum volutpat purus ornare. Maecenas porta leo in nunc laoreet bibendum. Suspendisse felis magna, aliquet vitae pretium ornare, dictum nec quam. Aliquam enim ipsum, gravida vitae nunc sed, luctus efficitur metus. Donec in semper magna. Morbi nec porta diam, a molestie dui. Phasellus eget lacus eleifend, iaculis nisl tristique, tempor urna. Aliquam quis felis orci. Sed lorem diam, gravida vitae leo sed, posuere laoreet nibh.',
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class ServicesPage extends PureComponent {
  render() {
    return (
      <div>
        <div style={styles.headerSeparator} />
        <HeaderBanner classes={styles.headerBanner}>
          <FontAwesomeIcon
            icon={faCog}
            size="1x"
          /><br />
          Services
        </HeaderBanner>
        <FirstTemplate classes={styles} headerTitle="Services" content={content} />
        <HeaderBanner classes={styles.headerDevelopmentPlataforms}>
          Our Key deveolpment Plataforms
        </HeaderBanner>
        <FirstTemplate classes={styles.secondPart} headerTitle="" content={content2} />
      </div>
    );
  }
}
