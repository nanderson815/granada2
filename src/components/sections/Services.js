import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Services = () => (
  <StaticQuery
    query={graphql`
      query {
        art_robot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "robot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_project: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "startup" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_data: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "data" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="services">
        <Container>
          <Grid>
            <div>
              <h2>Application Development</h2>
              <p>
                Looking to create something brand new? Using enterprise-grade
                DevOps and bleeding edge tech, we will work with you to design
                and develop digital solutions that deliver. Our team of
                designers and engineers will gain an understanding of your
                business, design a product that resonates with stakeholders, and
                create a solution that utilizes best-in-class technology and
                practices.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_robot.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_project.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Site Enhancements & Special Projects</h2>
              <p>
                Does your site need a visual upgrade? How about creating an
                in-house managed ordering platform? Maybe you just want to
                improve your site’s performance or SEO? Whatever your existing
                platform needs, we will work within your tech stack to enhance,
                improve, or iterate on your current digital presence.
              </p>
              <br />
              <p>
                We have extensive experience creating blazing fast applications
                that reduce bounce rate, delight users, and drive conversions.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Analytics & Growth</h2>
              <p>
                Harness the power of your data to turn impressions into
                customers. We’ll help you develop a data analytics strategy to
                improve your decision making with real-time access to your most
                important metrics. We’ll get you the right insights to
                prioritize new features that impact the bottom line.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_data.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Services;
