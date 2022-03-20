import React from 'react';
import styled from 'styled-components';
import { TextField, Button, FormControl } from '@mui/material';
import { useMutation } from 'blitz';
import { useForm } from 'react-cool-form';

import { Wave } from 'app/components/Curve';
import NavigationBar from 'app/components/NavigationBar';
import createShort from 'app/projects/short/mutations/createShort';
import getShort from 'app/projects/short/queries/getShort';

const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
const CODE_REGEX = /^[a-zA-Z0-9]+$/

export default function NewShort() {
    return <>
        <NavigationBar links={[
            ['#links', 'Links'],
            ['#skills', 'Skills'],
            ['/projects', 'Projects'],
        ]} />

        <Container>
            <Section color='blue'>
                <Wave color='black' percent={100} />
                <h1>URL Shortener</h1>
                <NewShortForm />
            </Section>

            <Section color='cyan'>
                <Wave color='blue' percent={150} />
                <h1>Short URL Statistics</h1>
                <GetShortForm />
            </Section>
        </Container>
    </>
}

function NewShortForm() {
    const [newShort] = useMutation(createShort);
    const { form, use } = useForm({
        defaultValues: { target: '', code: generateCode(), password: '' },
        validate: ({ target, code, password }) => {
            const errors = {};
            if (!URL_REGEX.test(target)) errors.target = 'Invalid URL';
            if (!code || !CODE_REGEX.test(code)) errors.code = 'Invalid code';
            if (password.length < 8) errors.password = 'Invalid password';
            return errors;
        },
        onSubmit: async (values, { reset }) => {
            const short = await newShort(values);
            if (short.error) return alert(short.error);
            alert(JSON.stringify(short, null, 4));
            return reset();
        }
    });
    const errors = use('errors');

    return <FormControl
        sx={{
            width: '100%',
            maxWidth: '500px',
            '& .MuiInputLabel-root': {
                color: 'white',
            },
            '& .MuiInputBase-root': {
                color: 'white',
            },
            '& .Mui-error': {
                fontSize: '1rem',
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'gray',
            }
        }}
    >
        <form ref={form} noValidate autoComplete='off'>
            <Field errors={errors} label='Target' id='target' required /><br />
            <Field errors={errors} label='Code' id='code' required /><br />
            <Field errors={errors} label='Password' id='password' type='password' required /><br />
            <Button type='submit' variant='contained' color='primary'>Create</Button>
        </form>
    </FormControl>
}

function GetShortForm() {
    const { form, use } = useForm({
        defaultValues: { code: '' },
        validate: ({ code }) => {
            const errors = {};
            if (!code || !CODE_REGEX.test(code)) errors.code = 'Invalid code';
            return errors;
        },
        onSubmit: async ({ code }) => {
            const short = await getShort({ code });
            if (!short) return alert('Short not found');
            alert(JSON.stringify(short, null, 4));
        }
    });
    const errors = use('errors');

    return <FormControl
        sx={{
            width: '100%',
            maxWidth: '500px',
            '& .Mui-error': {
                fontSize: '1rem',
            },
        }}
    >
        <form ref={form} noValidate autoComplete='off'>
            <Field errors={errors} label='Code' id='code' required />
            <Button type='submit' variant='contained' color='primary'>Search</Button>
        </form>
    </FormControl>
}

function Field({ errors, label, id, ...rest }) {
    return <TextField
        style={{ width: '100%' }}
        label={label}
        id={id}
        name={id}
        error={!!errors[id]}
        helperText={errors[id]}
        {...rest}
    />
}

function generateCode() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

/*
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
 
function Skill({ icon, name }) {
    return <SkillContainer>
        {icon} {name}
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
*/
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
    height: 100%;
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
