/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "./layout.css"
import "../styles/locomotive.css"

import { graphql, useStaticQuery } from "gatsby"
import { useRef, useState } from "react"

import Footer from "./footer"
import Header from "./header"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import PropTypes from "prop-types"
import React from "react"

// import { Copyright, Ftr, GenericH3, GenericPara } from "../styles/IndexStyles"

const Layout = ({ children }) => {
	const [sticky, setSticky] = useState(false)
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
	const stickNav = value => {
		value.scroll.y >= 100 ? setSticky(true) : setSticky(false)
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
			<Header
				sticky={sticky}
				siteTitle={data.site.siteMetadata?.title || `Title`}
			/>

			<LocomotiveScrollProvider
				options={options}
				containerRef={ref}
				watch={[]}
				onUpdate={scroll => {
					scroll.on("scroll", stickNav)
				}}
			>
				<main data-scroll-container ref={ref}>
					{children}
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
