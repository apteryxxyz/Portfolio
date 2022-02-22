import React from 'react';
import styled from 'styled-components';

import { Wave } from '~components/Curve';
import NavigationBar from '~components/NavigationBar';
import PROJECTS from '~constants/PROJECTS';

export default function Projects() {
    return <>
        <NavigationBar links={[
            ['/#links', 'Link'],
            ['/#skills', 'Skills'],
            ['', 'Projects'],
        ]} />

        <Container>
            {PROJECTS
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((project, i) => <Project {...project} key={i} i={i} />)}
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
    grid-template-columns: repeat(2, minmax(150px, 1fr));
`;

const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 5px;

    svg {
        margin-right: 2px;
    }
`;

function Skill({ icon, name }) {
    return <SkillContainer>
        {icon} {name}
    </SkillContainer>
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Button = styled.a`
    height: 100%;
    border-radius: 10px;
    padding: 10px;
    margin: 7px;
    background-color: ${props => props.color};
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.hoverColor};
    }
`;

function Project({ i, id, ...project }) {
    return <Section id={id} color={project.primaryColor}>
        <Wave color={i === 0 ? 'black' : PROJECTS[i - 1].primaryColor} percent={i * 25 + 100} />
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <SkillsGrid>
            {project.technologies
                .sort((a, b) => a[1].localeCompare(b[1]))
                .map(([icon, name], i) => <Skill key={i} icon={icon} name={name} />)}
        </SkillsGrid>

        <ButtonContainer>
            {project.buttons.map((button, i) => <Button
                key={i}
                href={button.disabled ? undefined : button.href}
                target={button.target}
                color={project.secondaryColor}
                hoverColor={project.tertiaryColor}
            >{button.text}</Button>)}
        </ButtonContainer>
    </Section>
}
