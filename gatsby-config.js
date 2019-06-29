module.exports = {
  siteMetadata: {
    title: `Uranium City History`,
    description: `Front end for 'Uranium City History' website at 'uraniumcity-history.com'.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: "uraniumcity-history.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionsPageIds: [],
        verboseOutput: true,
        perPage: 10,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://uraniumcity-history.com",
          replacementUrl: "http://localhost:8000"
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/places",
          "**/writing",
          "**/video",
          "**/media",
          "**/tags",
          "**/taxonomies"
        ],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
