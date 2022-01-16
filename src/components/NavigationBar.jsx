import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: black;
    top: 0;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const Logo = styled.a`
    float: left;
    padding: 15px 25px;
    color: white;
    font-weight: bold;
    margin-right: auto;
    cursor: pointer;
`;

const Item = styled.a`
    float: right;
    padding: 15px 25px;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #610909;
    }
`;

export default function NavigationBar({ links }) {
    return <Container>
        <Link href='/'><Logo>Apteryx</Logo></Link>
        {links ? links.map(([href, text]) => <Link key={href} href={href}><Item>{text}</Item></Link>) : null}
    </Container>
}