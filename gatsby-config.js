module.exports = {
  siteMetadata: {
    title: "Auditu",
    description: "Some description",
    siteUrl: "https://benel.netlify.app",
    author: {
      name: "Stefan Diskic",
      email: "disko998@gmail.com",
    },
    featuredTags: ["JavaScript", "React", "Bible", "Hebrew", "web development"],
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-remark-reading-time",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-feed",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "roboto mono",
          "Roboto:0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900",
          "Courgette",
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `blog-hhdxudhxpl`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        customizeWebpackConfig: config => {
          config.module.rules[0].test = /\.(js|mjs|jsx|ts|tsx)$/
          return config
        },
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms.tsx`,
        htmlTitle: "Blog | CMS",
        htmlFavicon: "",
      },
    },
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
