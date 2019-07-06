const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'STA 2023',
  },
  pathPrefix: '/gatsby-test',
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        ssr: false
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles'),
        pages: path.join(__dirname, 'src/pages'),
        layouts: path.join(__dirname, 'src/layouts'),
        static: path.join(__dirname, 'static')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: path.join(__dirname, 'src/markdown-pages')
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx']
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ]
};
