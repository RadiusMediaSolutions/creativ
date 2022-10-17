/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Footer } from "../styles/IndexStyles"
import Header from "./header"
import "./layout.css"
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div
				style={{
					margin: `0 auto`,
				}}
			>
				<main>{children}</main>
				<Footer
					style={{
						fontSize: `var(--font-sm)`,
					}}
				>
					<div class="icons">
						<FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
						<FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
						<FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
						<FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
						<FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
						<FontAwesomeIcon icon={faPinterest} size="2x" fixedWidth />
					</div>
					<div class="copyright">
						<span>&copy; {new Date().getFullYear()} , RandomHacker </span>
						<span>&middot; Built by
					{` `}RadiusMedia</span>
					</div>
				</Footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
