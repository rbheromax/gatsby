import styled from 'styled-components';

import { Container } from '@components/global';

export const Nav = styled.nav`
  padding: 16px 0;
  background-color: ${props => props.theme.color.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.white.regular};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
  &:hover {
    visibility: visible;
    transform: scaleX(1);
    transition: all 0.5s ease-in-out 1s;
    text-decoration: underline;
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  background: ${props => props.theme.color.primary};
`;

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
  color: #fff;
  ${props => props.theme.font_size.large};
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
