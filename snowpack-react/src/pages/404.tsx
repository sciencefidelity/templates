import React, { FC } from "react"
import type { RouteComponentProps } from "@reach/router"

import "@/styles/404.scss"

import Layout from "@/components/Layout"

const NotFound: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <div className="four-oh-four">
        <h1>404 Not Found</h1>
        <p>
          You've hit a path that does not exist,
          <br />
          oh the sadness!
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
