import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';
import { Link } from 'gatsby';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/rbheromax/gatsby',
  },

];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>

        <FooterWrapper>
          <StyledContainer>
            <span>
            <Copyright>
              <h2>Safara</h2>
              <div style={{lineHeight: "0.2"}}>
            </div>
            </Copyright>
            <div style={{lineHeight: "0.2"}}>
            <h4 style={{color: "#fff", fontWeight: "normal"}}>570 4th St</h4>
            <h4 style={{color: "#fff", fontWeight: "normal"}}>Lakewood, NJ 08701</h4>
            <h4 style={{color: "#fff", fontWeight: "normal"}}>United States</h4>
            <h4 style={{color: "#fff", fontWeight: "normal", textDecoration: "none"}} href="tel:+17324166114">+1 (732) 416-6114</h4>
            </div>
            <h4 style={{color: "#fff", fontWeight: "normal"}}>© 2020 Safara Associates</h4>
            </span>
            <div style={{ position: "absolute", bottom: 0}}>
            <h4>
{/* <span style={{color: "#fff"}}>
  Created by
  {` `}
  <Link href="https://twitter.com/uvctezz">
    @uvctezz
  </Link>
</span> */}
</h4>
            </div>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
