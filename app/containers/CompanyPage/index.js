import React, { PureComponent } from 'react';
import { FirstTemplate } from '../../components';

const styles = {
  body: {
    backgroundColor: '#F0F8FF',
  },
  headerSeparator: {
    width: '100%',
    height: '100px',
    backgroundColor: '#F0F8FF',
  },
  headerBanner: {
    container: {
      position: 'relative',
      width: '100%',
      height: '300px',
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
  bodyContent: {
    position: 'relative',
    width: '70%',
    marginLeft: '15%',
  },
  contentContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '650px',
    overflow: 'hidden',
  },
  imgContainer: {
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )`,
    width: '50%',

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
    color: '#707070',
  },
  img: {
    width: '100%',

  },
  overlayImg: {
    position: 'absolute',
    width: '50%',
    height: '650px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '100',
  }
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
  {
    isImgLeft: true,
    img: 'https://i.imgur.com/UqAfVas.jpg',
    title: 'Some Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur volutpat aliquet. Curabitur ultricies ornare massa sed iaculis. Vestibulum et interdum orci, id pellentesque est. Morbi id urna non metus commodo blandit. Nulla sit amet quam at ipsum maximus consectetur. Nam pellentesque enim sodales sem faucibus, rutrum volutpat purus ornare. Maecenas porta leo in nunc laoreet bibendum. Suspendisse felis magna, aliquet vitae pretium ornare, dictum nec quam. Aliquam enim ipsum, gravida vitae nunc sed, luctus efficitur metus. Donec in semper magna. Morbi nec porta diam, a molestie dui. Phasellus eget lacus eleifend, iaculis nisl tristique, tempor urna. Aliquam quis felis orci. Sed lorem diam, gravida vitae leo sed, posuere laoreet nibh.',
  },
];
const teamRoster = [
  {
    name: 'Danilo Carella',
    profession: 'CEO',
    quote:
      'Va una señora por la calle y dice: ¡¡TAXIIII!! Y dice el taxita: ¡¡SEÑORAAA!!',
    avatar: 'https://i.imgur.com/UqAfVas.jpg',
  },
  {
    name: 'Danilo de León',
    profession: 'CEO',
    quote:
      '- ¿Me da un desodorante? - ¿De bolita? - No, de axila.',
    avatar: 'https://i.imgur.com/2PhbhsT.jpg',
  },
  {
    name: 'Sharon Iciarte',
    profession: 'Communications',
    quote:
      '¿Cómo se despiden los químicos? Ácido un placer...',
    avatar: 'https://i.imgur.com/GMu7e8u.jpg',
  },
  {
    name: 'Kevin Pacin',
    profession: 'Sales man',
    quote:
      '¿Para qué es el retrete de un spa? Spa Mear. ',
    avatar: 'https://i.imgur.com/ib2vxCC.jpg',
  },
  {
    name: 'Rodrigo Lopetegui',
    profession: 'Software Developer',
    quote:
      '- ¡Tío, he soñado que ganaba 300 millones como mi padre! - ¿¿¿Tu padre ha ganado 300 millones??? - ¡Qué va! ¡Él también lo sueña!',
    avatar: 'https://i.imgur.com/ehChDKn.jpg',
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class CompanyPage extends PureComponent {
  render() {
    return (
      <FirstTemplate classes={styles} headerTitle="Company" content={content} />
    );
  }
}
