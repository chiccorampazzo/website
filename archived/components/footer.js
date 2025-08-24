import React from "react"

import Social from "./social"

const Footer = () => {
  return (
    <footer className="p-12 bg-gray-200">
      <div className="flex justify-center space-y-1 items-center">
        <Social />
      </div>
    </footer>
  )
}

export default Footer
