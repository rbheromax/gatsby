import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;



const ContactForm = () => (
    <div id="contact" style={{padding: "128px", backgroundColor: "#F6F6F6"}}>
        <h1 style={{ marginBottom: 40 }}>Email Us</h1>
        <Form style={{maxWidth: "1200px"}}>
            <WrapperGrid>
                <Input type="text" name="name" placeholder="Name" />
            </WrapperGrid>
            <WrapperGrid>
                <Input type="text" name="company" placeholder="Company"/>
            </WrapperGrid>
            <WrapperGrid>
                <Input type="email" name="email" placeholder="Email" />
            </WrapperGrid>
            <WrapperGrid>
                <Input type="text" name="phone" placeholder="Phone Number"/>
            </WrapperGrid>
            <WrapperGrid full>
                <Textarea name="message" rows="5" placeholder="Message"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton>Submit</StyledButton>
            </WrapperGrid>
        </Form>
    </div>
)

export default ContactForm

const Title = ({ className, text }) => (
    <h1 className={className}>{ text }</h1>
)

const StyledTitle = styled(Title)`
    color: #1197D5;
    font: 70px; 
    text-align: center; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`; 

const Textarea = styled.textarea`
    border: 1px solid #1197D5; 
    border-radius: 15px;
    padding: 1em; 
    width: 100%; 
`; 

const Label = styled.label`
    display: block; 
`; 

const Input = styled.input`
    border: 1px solid #1197D5; 
    border-radius: 15px;

    padding: 1em; 
    width: 100%; 
`; 

const Form = styled.form`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-gap: 20px; 
`; 


const FormContainer = styled.div`
    margin-left: auto; 
    margin-right: auto;
    max-width: 1170px;  
    ${props => props.wrapper && css`
        box-shadow: 0 0 20px 0 rgba(184, 22, 31, 0.3);
        > * {
            padding: 1em; 
        }
        
        @media (min-width: 700px) {
            display: grid; 
            grid-template-columns: 1fr 2fr; 
            > * {
                padding: 2em; 
            }
        }
    `}
`; 

const StyledButton = styled.button`
    background: #1197D5;
    border: 0; 
    color: #fff; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    border-radius: 15px;

    &:hover, &:focus {
        background: #B8161F;
        color: #fff; 
        outline: 0; 
        transition: background-color 2s ease-out; 
    }
    
`; 