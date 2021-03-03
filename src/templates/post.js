import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import { extractMetadataFromFilename } from "../utils"
import Layout from "../components/layout"

const shortcodes = { Link } // Provide common components here

const Post = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  const result = extractMetadataFromFilename(mdx.slug)
  const date = result.date

  return (
    <Layout
      title={frontmatter.title}
      description={mdx.excerpt}
      lang={frontmatter.lang}
    >
      <h2 className="text-xl mb-6 font-semibold text-gray-700">{date}</h2>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      slug
      excerpt
      frontmatter {
        title
        lang
      }
    }
  }
`
