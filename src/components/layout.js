import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "academicons/css/academicons.css"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

const Layout = ({
  title,
  description,
  lang = "en",
  fullpage = false,
  children,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  title = title || props?.pageContext?.frontmatter.title
  description = description || props?.pageContext?.frontmatter.description

  lang = lang || props?.pageContext?.frontmatter.lang

  return (
    <>
      <SEO title={title} description={description} lang={lang} />
      <Header
        siteTitle={data.site.siteMetadata.title || `Title`}
        fullpage={fullpage}
      />

      <main
        className={"mx-auto max-w-3xl " + (!fullpage ? `p-5 mt-32 mb-20` : ``)}
      >
        {!fullpage && <h1 className="text-5xl mb-4 font-bold">{title}</h1>}
        {children}
      </main>

      {!fullpage && <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
