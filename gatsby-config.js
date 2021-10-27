module.exports = {
  siteMetadata: {
    title: `ShiJbey.github.io`,
    author: {
      name: `Shi Johnson-Bey`,
      summary: `Computational Media Ph.D. student and Co-Founder of The Blacklist DMV`,
    },
    description: `Personal online portfolio for Shi Johnson-Bey, Computational Media Ph.D. student and Co-Founder of The Blacklist DMV.`,
    siteUrl: `https://shijbey.github.io`,
    social: {
      twitter: `shijbey`,
      instagram: `shijbey`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-instagram-embed`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `The Blacklist DMV`,
    //     short_name: `The Blacklist DMV`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/theblacklistdmv-logo.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-fontawesome-css`,

    // `gatsby-plugin-tiktok`,
  ],
}
