import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Nav from "./nav"
import img from "../images/Francesco-Rampazzo.jpg"

const Header = ({ fullpage }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r z-50 from-yellow-600 to-yellow-300 mb-12 w-full top-0 fixed">
      <div className="p-1.5 max-w-4xl m-auto">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="flex justify-center">
            {!fullpage && (
              <img
                src={img}
                alt="Francesco Rampazzo"
                style={{
                  maxWidth: `50px`,
                  maxHeight: `50px`,
                  marginRight: `10px`,
                  borderRadius: `100%`,
                  boxShadow: `-10px 10px 80px rgba(0,0,0,.75)`,
                }}
                className="items-center"
              />
            )}
            <div className="flex flex-shrink-0 items-center text-white font-extralight text-base md:text-xl uppercase">
              Francesco &nbsp; <span className="font-semibold">Rampazzo</span>
            </div>
          </Link>

          <div
            className={
              "inset-y-0 right-0 flex items-center" +
              (menuOpen ? "absolute" : "")
            }
          >
            <button
              className="inline-flex items-center z-50 justify-center p-2 rounded-md text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && <Nav />}
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
