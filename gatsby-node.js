const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent)
        const slug = createFilePath({ node, getNode, basePath: 'posts' })
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `).then(result => {
                result.data.allMarkdownRemark.edges.map(({ node }) => {
                  console.log('testtt', node)
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/blog-post.js`),
                        context: {
                            // Data passed to context is available in page queries as GraphQL variables.
                            slug: node.fields.slug,
                        },
                    })
                })
                resolve()
            })
    })
}