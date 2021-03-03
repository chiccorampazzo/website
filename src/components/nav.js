import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          nav {
            name
            page
          }
        }
      }
    }
  `)

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      activeClassName="font-bold rounded-xl bg-white bg-opacity-25"
      className="p-4 my-2"
    >
      {children}
    </Link>
  )
  return (
    <div className="fixed z-20 inset-y-0 w-screen h-screen flex justify-center bg-gradient-to-r from-yellow-600 to-yellow-300">
      <div className="flex flex-col items-center justify-center text-4xl text-white">
        {data.site.siteMetadata.nav.map((item, index) => (
          <NavLink to={item.page} key={index}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Nav
