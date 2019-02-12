import React from 'react';
import PropTypes from 'prop-types';

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
/* eslint-disable global-require */
const CompanyComponent = props => {
    const { classes } = props;
    return (
        <div>
           Hola
        </div>
    );
};
/* eslint-enable global-require */
CompanyComponent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default CompanyComponent;
