import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = () => {
  return (
    <header className="bg-gradient-to-r z-50 from-yellow-600 to-yellow-300 mb-12 w-full top-0">
      <div className="p-1.5 max-w-4xl m-auto">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="flex justify-center">
            <div className="flex flex-shrink-0 items-center text-white font-extralight text-base md:text-xl uppercase">
              Francesco &nbsp; <span className="font-semibold">Rampazzo</span>
            </div>
          </Link>

          <div className={"inset-y-0 right-0 flex items-center"}>
            <Link
              to="/blog"
              //activeClassName="font-bold rounded-xl bg-white bg-opacity-25"
              className="p-4 my-2 text-white"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
