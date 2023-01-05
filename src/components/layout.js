/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "./layout.css"
import "../styles/locomotive.css"

// import { Copyright, Ftr, GenericH3, GenericPara } from "../styles/IndexStyles"
import { Link, graphql, useStaticQuery } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import PropTypes from "prop-types"
import React from "react"
import { useRef } from "react"

// import * as React from "react"

const Layout = ({ children }) => {
	const ref = useRef(null)

	const options = {
		smooth: true,
		smartphone: {
			smooth: true,
		},
		tablet: {
			smooth: true,
		},
	}

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
			<LocomotiveScrollProvider options={options} containerRef={ref}>
				<main data-scroll-container ref={ref}>
					<div
						style={{
							marginTop: `-50px`,
						}}
					>
						{children}
					</div>
					<Footer />
				</main>
			</LocomotiveScrollProvider>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
