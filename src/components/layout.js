import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={css`
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        margin: 0 auto;
      `}>
        <Link to={`/`}>
          <h3 className={css`
            font-style: normal;
            display: inline-block;
            margin-bottom: ${rhythm(2)};
          `}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link className={css`float: right;`} to={`/about/`}>
          About
        </Link>
        {children}
      </div>
    )}
  />
)