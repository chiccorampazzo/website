import React from "react"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Social from "../components/social"
import Bio from "../components/bio"

const IndexPage = () => (
  <Layout
    title="Home Page"
    description="Francesco Rampazzo is a CD Fellow in Marketing and Consumer Demography at Saïd Business School and Leverhulme Centre for Demographic Science at University of Oxford"
    fullpage={true}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`,
        //height: `100vh`,
        margin: `auto`,
      }}
    >
      <div className="w-52">
        <Avatar />
      </div>
      <div className="flex items-center text-center">
        <h1 className="text-gray-900 font-semibold max-w-sm lg:max-w-lg text-4xl mt-4 justify-center">
          Francesco Rampazzo
        </h1>
      </div>
      <h2 className="text-gray-600 my-6 font-medium text-xl uppercase tracking-widest">
        Demographer
      </h2>
      <Bio />
    </div>
  </Layout>
)

export default IndexPage
