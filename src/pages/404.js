import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <div className="mt-12 text-2xl">
      <div className="mb-6">
        You just hit a route that doesn&#39;t exist... the sadness.
      </div>
      <div>
        Go to <Link to="/">home</Link>.
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
