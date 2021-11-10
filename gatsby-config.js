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
        path: `${__dirname}/content/`,
        name: `content`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
