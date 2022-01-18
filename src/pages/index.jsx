import React from 'react';
import styled from 'styled-components';

import { Wave } from '../components/Curve';
import NavigationBar from '../components/NavigationBar';
import SKILLS from '../constants/skills';

export default function Home() {
    return <>
        <NavigationBar links={[['#links', 'Links'], ['#skills', 'Skills'], ['/projects', 'Projects']]} />
        <Container>
            <Section color='#610909'>
                <Wave color='black' percent={150} />
                <h1>Apteryx</h1>
                <p>A Kiwi Software Developer</p>
            </Section>

            <Section id='links' color='#8c0f0f'>
                <Wave color='#610909' percent={220} />
                <h1>Link Tree</h1>
                <ButtonContainer>
                    <Button href='/github' target='_blank'>GitHub</Button>
                    <Button href='/youtube' target='_blank'>YouTube</Button>
                    <Button href='/twitter' target='_blank'>Twitter</Button>
                </ButtonContainer>
            </Section>

            <Section id='skills' color='#a12006'>
                <Wave color='#8c0f0f' percent={300} />
                <h1>Skills</h1>
                <SkillsGrid>
                    {SKILLS
                        .sort((a, b) => a[1].localeCompare(b[1]))
                        .map(([icon, title]) => <Skill key={title} icon={icon} title={title} />)}
                </SkillsGrid>
            </Section>
        </Container>
    </>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
`;

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    padding-top: 150px;
    color: white;
    background-color: ${props => props.color};

    h1 {
        max-width: 700px;
        text-align: center;
        font-size: 3rem;
        margin: 0;
    }

    p {
        max-width: 700px;
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
    }
`;

const SkillsGrid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, minmax(150px, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
    }
`;

const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    padding: 5px;

    svg {
        margin-right: 2px;
    }
`;

function Skill({ icon, title }) {
    return <SkillContainer>
        {icon} {title}
    </SkillContainer>
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.a`
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    margin: 7px 0;
    background-color: #bf1717;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #ed1c1c;
    }
`;
