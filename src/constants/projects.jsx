import React from 'react';

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiAndroid, SiVisualstudio, SiExpo, SiTypescript } from 'react-icons/si';
import { GrRaspberry } from 'react-icons/gr';
import { DiMongodb, DiNpm } from 'react-icons/di';

// export default [
//     [<FaHtml5 />, 'HTML'],
//     [<FaCss3Alt />, 'CSS'],
//     [<FaJs />, 'JavaScript'],
//     [<FaNodeJs />, 'Node.js'],
//     [<SiNextdotjs />, 'Next.js'],
//     [<SiExpress />, 'Express'],
//     [<SiAndroid />, 'Android'],
//     [<SiVisualstudio />, 'Visual Basic'],
//     [<GrRaspberry />, 'Raspberry Pi'],
//     [<FaReact />, 'React'],
//     [<FaReact />, 'React Native'],
//     [<DiMongodb />, 'MongoDB'],
//     [<SiExpo />, 'Expo'],
//     [<DiNpm />, 'NPM'],
//     [<SiTypescript />, 'TypeScript'],
// ];

export default [
    {
        id: 'dvau',
        name: 'DarkViperAU Soundboard',
        types: ['app'],
        description: 'More than 70 audio clips from the greatest GTA 5 speedrunner',
        primaryColor: '#080826',
        secondaryColor: '#121252',
        tertiaryColor: '#1e1e85',
        technologies: [
            [<FaReact />, 'React Native'],
            [<FaJs />, 'JavaScript'],
            [<SiAndroid />, 'Android'],
            [<SiExpo />, 'Expo'],
        ],
        buttons: [
            {
                text: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.blackbox.darkviperau',
                target: '_blank',
            }
        ]
    },
    {
        id: 'covidinnz',
        name: 'COVID in New Zealand',
        types: ['site'],
        description: 'A detailed source for information related to the current state of COVID-19 in New Zealand',
        primaryColor: '#bfb60d',
        secondaryColor: '#dbd10f',
        tertiaryColor: '#f2e711',
        technologies: [
            [<FaReact />, 'React'],
            [<FaJs />, 'JavaScript'],
        ],
        buttons: [
            {
                text: 'Visit',
                href: 'https://covidinnz.com',
                target: '_blank',
            }
        ]
    },
    {
        id: 'self',
        name: 'apteryx.xyz',
        description: 'My personal website, built using React and Next.js',
        primaryColor: '#610909',
        secondaryColor: '#8c0f0f',
        tertiaryColor: '#a12006',
        technologies: [
            [<FaReact />, 'React'],
            [<FaJs />, 'JavaScript'],
            [<SiNextdotjs />, 'Next.js'],
        ],
        buttons: [
            {
                text: 'Source',
                href: 'https://github.com/apteryxxyz/apteryx.xyz',
                target: '_blank',
            }
        ]
    }
];
