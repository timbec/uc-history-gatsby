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
          "**/slider",
          "**/news",
          "**/places",
          "**/writing",
          "**/video", 
          "**/memorabilia",
          "**/media",
          "**/tags",
          "**/comments",
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
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: 'gatsby-remark-images',
                  options: {
                      maxWidth: 750,
                      linkImagesToOriginal: false
                  }
              }, 
              {
                resolve: `gatsby-plugin-remote-images`,
                options: {
                  nodeType: 'allImageSharp',
                  imagePath: 'path.to.image',
                },
              },
          ]
      }
  },
    // this (optional) plugin enables Progressive Web App + Offlinnpe functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
