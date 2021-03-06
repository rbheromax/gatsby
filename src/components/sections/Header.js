import React from 'react';
import Fade from 'react-reveal/Fade';

import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper style={{ overflow: "hidden"}}>
      <Section id="header" style={{height: "100vh"}}>
        <Container>
        <Fade bottom>

          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Fade Bottom>
            <Text style={{color: "#fff"}}>
              <h1>
                Consulting
                <br />
                &amp; Procurement
                <br />
                services
              </h1>
              <br />
              <p>
                <StyledLink href="#about" style={{color: "#fff"}}>
                  Check out what we do &nbsp;&#x2794;
                </StyledLink>
              </p>
            </Text>
            </Fade>
          </Grid>
          </Fade>

        </Container>
        </Section>

      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
    height: 100vh;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 128px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;

const StyledLink = styled(AnchorLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    visibility: visible;
    transform: scaleX(1);
    transition: all 0.5s ease-in-out 1s;
    text-decoration: underline;
  }
`;