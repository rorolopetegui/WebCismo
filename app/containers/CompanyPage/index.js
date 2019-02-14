import React, { PureComponent } from 'react';
import { FirstTemplate } from '../../components';
import { HeaderBanner } from '../../components/Commons';
import ImgButton from '../../components/Commons/ImgButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import MediaButton from '../../components/MenuComps/MediaButton';
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
      height: '230px',
      background: 'repeating-linear-gradient(45deg, #333333, #333333 10px, #2D2D2D 10px, #2D2D2D 20px)',
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
    backgroundColor: '#333333',
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
  teamContainer: {
    width: '80%',
    height: '300px',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  titleTeam: {
    fontFamily: 'Roboto',
    letterSpacing: '0.1px',
    fontWeight: '900',
    fontSize: '25px',
    color: 'black',
  },
  teamPlayer: {
    mediaButton: {
      position: 'relative',
      float: 'left',
      width: '15%',
      height: '180px',
      marginLeft: '8%',
      marginTop: '5%',
      marginBottom: '2%',
      overflow: 'hidden',
    },
    imgMedia: {
      width: '100%',
    },
    mediaTitle: {
      fontSize: '20px',
      color: 'white',
      position: 'absolute',
      width: '80%',
      top: '20%',
      left: '0',
    },
    mediaDesc: {
      position: 'absolute',
      width: '10%',
      top: '50%',
      left: '30%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    containerIcon: {
      button: {
        color: '#4D696E',
        float: 'left',
        marginLeft: '35px',
        textDecoration: 'none',
        // backgroundColor: 'rgba(173,185,187, 0.2)',
      },
      buttonHover: {
        float: 'left',
        marginLeft: '35px',
        color: '#088DA5',
        textDecoration: 'none',
      },
      socialMediaIconSize: '2x',
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
    avatarAlt: 'https://i.imgur.com/ib2vxCC.jpg',
    linkedin: '/in/rodrigo-lopetegui-bb7808107/',
  },
  {
    name: 'Danilo de León',
    profession: 'CEO',
    quote:
      '- ¿Me da un desodorante? - ¿De bolita? - No, de axila.',
    avatar: 'https://i.imgur.com/2PhbhsT.jpg',
    avatarAlt: 'https://i.imgur.com/UqAfVas.jpg',
    linkedin: '/in/rodrigo-lopetegui-bb7808107/',
  },
  {
    name: 'Sharon Iciarte',
    profession: 'Operations',
    quote:
      '¿Cómo se despiden los químicos? Ácido un placer...',
    avatar: 'https://i.imgur.com/GMu7e8u.jpg',
    avatarAlt: 'https://i.imgur.com/2PhbhsT.jpg',
    linkedin: '/in/rodrigo-lopetegui-bb7808107/',
  },
  {
    name: 'Kevin Pacin',
    profession: 'Sales man',
    quote:
      '¿Para qué es el retrete de un spa? Spa Mear. ',
    avatar: 'https://i.imgur.com/ib2vxCC.jpg',
    avatarAlt: 'https://i.imgur.com/GMu7e8u.jpg',
    linkedin: '/in/rodrigo-lopetegui-bb7808107/',
  },
  {
    name: 'Rodrigo Lopetegui',
    profession: 'Software Developer',
    quote:
      '- ¡Tío, he soñado que ganaba 300 millones como mi padre! - ¿¿¿Tu padre ha ganado 300 millones??? - ¡Qué va! ¡Él también lo sueña!',
    avatar: 'https://i.imgur.com/ib2vxCC.jpg',
    avatarAlt: 'https://i.imgur.com/ehChDKn.jpg',
    linkedin: '/in/rodrigo-lopetegui-bb7808107/',
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class CompanyPage extends PureComponent {
  render() {
    return (
      <div>
        <div style={styles.headerSeparator} />
        <HeaderBanner classes={styles.headerBanner}>
          <FontAwesomeIcon
            icon={faUserTie}
            size="1x"
          /><br/>
          Company
        </HeaderBanner>
        <FirstTemplate classes={styles} content={content} headerTitle={"Company"}>
          <div style={styles.teamContainer}>
            <span style={styles.titleTeam}>Meet the leadership team</span>
            {teamRoster.map((item, index) =>
              <div key={index}>
                <ImgButton
                  classes={styles.teamPlayer}
                  withImgAlt={true}
                  backgroundImage={item.avatar}
                  backgroundImageAlt={item.avatarAlt}
                  title={item.profession}
                  link={item.linkedin}
                  description={
                    <MediaButton
                      classes={styles.teamPlayer.containerIcon}
                      link={"https://www.linkedin.com" + item.linkedin}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size={styles.teamPlayer.containerIcon.socialMediaIconSize}
                      />
                    </MediaButton>
                  }
                />
              </div>
            )}
          </div>
        </FirstTemplate>
      </div>
    );
  }
}
