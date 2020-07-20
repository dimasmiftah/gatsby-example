/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "Dimas",
    data: ["item 1", "item 2"],
    person: { name: "Hinata", age: 15 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `texts`,
        path: `${__dirname}/src/texts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3ibhmr1zv2us`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `NZL6rBv1lMclpjv1uqKkhRc3XohWfgCCEqVy3exshZo`,
      },
    },
  ],
}
