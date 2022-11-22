module.exports = {
  siteMetadata: {
    title: `Francesco Rampazzo`,
    description: `Demographer`,
    author: `@chiccorampazzo`,
    siteUrl: `https://francescorampazzo.com`,
    contact: {
      email: `Francesco.Rampazzo@sociology.ox.ac.uk`,
      twitter: `chiccorampazzo`,
      linkedin: `frampazzo`,
      googleScholar: `_oD24CIAAAAJ`,
      mastodon: `https://mastodon.social/@chiccorampazzo`,
    },
    seo: {
      sameAs: [
        "https://twitter.com/chiccorampazzo",
        "https://www.sbs.ox.ac.uk/about-us/people/francesco-rampazzo",
        "https://scholar.google.com/citations?user=_oD24CIAAAAJ",
      ],
    },
    nav: [
      {
        name: "About me",
        page: "/about-me/",
      },
      {
        name: "Publications",
        page: "/publications/",
      },
      {
        name: "Blog",
        page: "/blog/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francesco Rampazzo`,
        short_name: `Francesco Rampazzo`,
        start_url: `/`,
        background_color: `#d97706`,
        theme_color: `#d97706`,
        display: `standalone`,
        icon: `src/images/Francesco-Rampazzo.jpg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          pages: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 890,
              linkImagesToOriginal: false,
              quality: 80,
              wrapperStyle: `margin-top:25px;margin-bottom:25px;`,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true,
      },
    },
  ],
}
