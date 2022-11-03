/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "./layout.css"

import * as React from "react"

import {
	Copyright,
	Footer,
	GenericH3,
	GenericPara,
} from "../styles/IndexStyles"
import { Link, graphql, useStaticQuery } from "gatsby"
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faPinterest,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "./header"
import PropTypes from "prop-types"

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
					<div className="ftr1">
						<GenericH3 none>Sky Develop</GenericH3>
						<GenericPara lessSize>
							We use modern and latest technologies which help our
							clients as they are high scalable and maintainable
						</GenericPara>
					</div>
					<div className="ftr2">
						<GenericH3 none>Phone Number</GenericH3>
						<Link
							to="/"
							style={{
								color: "#666666 ",
								fontSize: `var(--font-sm)`,
								textDecoration: `none`,
							}}
						>
							123-456-7890
						</Link>
					</div>
					<div className="ftr3">
						<GenericH3 none>Email Address</GenericH3>
						<Link
							to="/"
							style={{
								color: "#666666 ",
								fontSize: `var(--font-sm)`,
								textDecoration: `none`,
							}}
						>
							skydevelop@mail.com
						</Link>
					</div>
					<div className="ftr4">
						<GenericH3 none>Address</GenericH3>
						<GenericPara lessSize>
							1234 Prather Road, Louisville KY 47172
						</GenericPara>
					</div>
				</Footer>
				<Copyright>
					<div>
						<span>
							&copy; {new Date().getFullYear()} , RandomHacker{" "}
						</span>
						<span>
							&middot; Built by
							{` `}RadiusMedia
						</span>
					</div>
				</Copyright>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
