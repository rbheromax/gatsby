import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as PDFLogo } from '@images/logos/adobe-pdf.svg';
import { ReactComponent as DOCXLogo } from '@images/logos/docx-icon.svg';



const PRODUCTS = [
  {
    logo: PDFLogo,
    link: '/docs/line_card.pdf',
  },
  {
    logo: DOCXLogo,
    link: '/docs/line_card.docx',
  }
];

const Products = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="products" accent>
        <StyledContainer>
          <div>
            <div style={{textAlign: "right", paddingTop: "50px", paddingBottom: "50px"}}>
              <h1 style={{color: "#fff"}} >Products We Offer</h1>
              <h3 style={{color: "#fff"}} >Download our Line Cards</h3>
            </div>
            <LogoGrid style={{paddingBottom: "100px"}}>
              {PRODUCTS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art style={{}}>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      float: left;
      width:  100px;
      height: 100px;
      object-fit: cover;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default Products ;
