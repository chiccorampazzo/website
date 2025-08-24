import React from "react"
import { Link, graphql } from "gatsby"

import { extractMetadataFromFilename } from "../utils"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  return (
    <Layout title="Blog">
      {data.allMdx.edges.map(({ node }, index) => {
        const result = extractMetadataFromFilename(node.slug)
        const date = result.date
        const slug = "/" + result.slug
        return (
          <div key={index}>
            <Link to={slug} className="flex justify-between my-5 text-gray-800">
              <div className="text-xl font-semibold hover:underline">
                {node.frontmatter.title || `Untitled`}
              </div>
              <div className="text-lg font-thin">{date}</div>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(content)/" } }
      sort: { order: DESC, fields: slug }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`
