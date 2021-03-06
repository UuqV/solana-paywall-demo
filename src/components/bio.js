/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import colors from '../colors';

const Bio = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1600) {
            src
            srcSet
            originalImg
            originalName
            aspectRatio
            sizes
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        boxShadow: `0px 0px 20px 0px`,
        background: colors.background,
      }}
    >
      <div
        style={{
          display: `flex`,
          flex: `1 1 60vw`,
          flexDirection: `column`,
          justifyContent: `space-around`,
          padding: `1em`,
          color: colors.greenText,
          textAlign: `right`,
        }}
      >
        <h3>
          Thanks for your support!
          {` `}
        </h3>
        <p>Be sure to vote for this project for Solana Riptide!</p>
      </div>
    </div>
  );
};

export default Bio;
