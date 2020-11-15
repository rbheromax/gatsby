import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from '../common/Navbar/style';

const Contact = () => (
        <Section id="brands" accent>
          <StyledContainer>
            <div>
              {/* <h1>Used by biggest in tech</h1> */}
              <ContactForm />
            </div>
          </StyledContainer>
        </Section>
  );
  export default Contact;
  class ContactForm extends React.Component {
    render() {
      const formStyle = {
        textAlign: 'left'
      }
      const buttonsStyle = {
        margin: '1rem',
        textAlign: 'center',
      }
      return (
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
      );
    }
  }