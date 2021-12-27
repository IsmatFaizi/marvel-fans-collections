module.exports = {
  siteMetadata: {
    title: `Marvel Fans Collection`,
    description: `Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent character-based entertainment companies, built on a proven library of more than 8,000 characters featured in a variety of media over seventy-five years. Marvel utilizes its character franchises in entertainment, licensing and publishing.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://marvel-fans-collection.local/graphql",
      },
    },
  ],
}
