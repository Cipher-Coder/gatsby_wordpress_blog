import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Footer from "../components/Footer"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title, description },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <div>
            <h1 className="main-heading text-center">
              <Link to="/">{parse(title)}</Link>
            </h1>
            <p className="text-center">{parse(description)} Get Unedited.</p>
          </div>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
