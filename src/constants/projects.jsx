import React from 'react';

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDiscord } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiAndroid, SiVisualstudio, SiExpo, SiTypescript } from 'react-icons/si';
import { GrRaspberry } from 'react-icons/gr';
import { DiMongodb, DiNpm } from 'react-icons/di';

export default [
    {
        id: 'darkviperau',
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
            [<FaNodeJs />, 'Node.js'],
        ],
        buttons: [
            {
                text: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.blackbox.darkviperau',
                target: '_blank',
            },
            {
                text: 'Galaxy Store',
                href: 'https://galaxystore.samsung.com/detail/com.blackbox.darkviperau',
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
            [<SiExpress />, 'Express'],
            [<FaNodeJs />, 'Node.js'],
        ],
        buttons: [
            {
                text: 'Rewriting',
                href: 'https://covidinnz.com',
                target: '_blank',
                disabled: true
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
            [<FaNodeJs />, 'Node.js'],
        ],
        buttons: [
            {
                text: 'Source Code',
                href: 'https://github.com/apteryxxyz/apteryx.xyz',
                target: '_blank',
            }
        ]
    },
    {
        id: 'tuhi',
        name: 'Tuhi',
        description: 'A basic templating language, adding logic to string templates\n(In early development)',
        primaryColor: '#0d0d0d',
        secondaryColor: '#1a1a1a',
        tertiaryColor: '#2e2e2e',
        technologies: [
            [<FaJs />, 'JavaScript'],
            [<FaNodeJs />, 'Node.js'],
            [<DiNpm />, 'NPM'],
        ],
        buttons: [
            {
                text: 'Source Code',
                href: 'https://github.com/apteryxxyz/tuhi',
                target: '_blank',
            },
            {
                text: 'NPM Package',
                href: 'https://www.npmjs.com/package/tuhi',
                target: '_blank',
            },
        ]
    },
    {
        id: 'evaluate',
        name: 'Evaluate',
        description: 'Evaluate any code in over 70 different programming languages. Save code as snippets for lately use or create custom commands in a language you know!',
        primaryColor: '#00a300',
        secondaryColor: '#00d100',
        tertiaryColor: '#00ff00',
        technologies: [
            [<FaJs />, 'JavaScript'],
            [<FaNodeJs />, 'Node.js'],
            [<FaDiscord />, 'Discord.js'],
        ],
        buttons: [
            {
                text: 'Add to Server',
                href: 'https://discord.com/api/oauth2/authorize?client_id=723180989841009408&permissions=8&scope=bot',
                target: '_blank',
            }
        ]
    }
];
