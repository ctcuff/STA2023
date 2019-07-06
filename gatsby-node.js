const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const chapterTemplate = path.resolve('src/templates/chapter-template.js');
  return graphql(`
    {
      allMdx(sort: { order: ASC, fields: [frontmatter___chapter] }) {
        edges {
          node {
            frontmatter {
              title
              path
              chapter
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: chapterTemplate,
        context: {}
      });
    });
  });
};
