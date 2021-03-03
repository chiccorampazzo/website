const { extractMetadataFromFilename } = require("./src/utils")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const template = require.resolve(`./src/templates/post.js`)

  const Posts = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/(content)/" } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // Handle errors
  if (Posts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  Posts.data.allMdx.edges.forEach(({ node }) => {
    const result = extractMetadataFromFilename(node.slug)
    const slug = result.slug

    createPage({
      path: slug,
      component: template,
      context: {
        slug: node.slug,
      },
    })
  })
}
