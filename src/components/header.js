import React, { useRef, useState } from "react"

import { Link } from "gatsby"
import Logo from "../images/logo-small.png"
import PropTypes from "prop-types"
import styled from "styled-components"

const SiteHeader = styled.header`
	.menu__items {
		padding: 10px 30px;
		margin-top: 80px;
		background: whitesmoke;
		text-transform: uppercase;
		display: flex;
    	align-items: center;
		position:fixed;
		transition:.3s;
	.menu__items > * {
		margin-right: 1rem;
	}
	.site-logo a{
		color:#9b9b00 !important;
		font-weight:bold;
	}
	.active span {
	color: #9b9b01;
}

`

const MenuItem = styled.span`
	color: ${props => (props.selected ? `#9b9b00` : `#666`)};
	font-size: 24px;
	font-weight: bold;
	padding: 10px 20px;
	font-family: "Poppins";
	color: ;
	// background: ${props => (props.selected ? "lightgrey" : "white")};
`
const isBrowser = () => typeof window !== "undefined"

const Header = ({ siteTitle }) => {
	const onScroll = useRef(null)
	const onActive = useRef(null)

	const changeBackground = () => {
		if (isBrowser() && window.scrollY >= 100) {
			onScroll.current.className = "menu__items navbar"
			onActive.current.className = "fixed-top onactive"
		} else {
			onScroll.current.className = "menu__items"
			onActive.current.className = "fixed-top"
		}
	}
	isBrowser() && window.addEventListener("scroll", changeBackground)
	// window.addEventListener("scroll", changeBackground)

	return (
		<SiteHeader>
			<div class="fixed-top" ref={onActive}>
				<div class="menu__items" ref={onScroll}>
					<div class="site-logo">
						<Link
							to="/"
							style={{
								fontSize: `var(--font-sm)`,
								textDecoration: `none`,
								marginRight: `15px`,
							}}
						>
							{/* {siteTitle} */}
							<img src={Logo} alt="Logo" width="50" />
						</Link>
					</div>
					<Link
						exact
						activeClassName="active"
						to="/"
						style={{ textDecoration: `none` }}
					>
						<MenuItem>Home</MenuItem>
					</Link>
					<Link
						activeClassName="active"
						to="/portfolio"
						style={{ textDecoration: `none` }}
					>
						<MenuItem>Portfolio</MenuItem>
					</Link>
					<Link
						activeClassName="active"
						to="/blog"
						style={{ textDecoration: `none` }}
					>
						<MenuItem>Blog</MenuItem>
					</Link>
					<Link
						activeClassName="active"
						to="/contact"
						style={{ textDecoration: `none` }}
					>
						<MenuItem>Contact</MenuItem>
					</Link>
				</div>
			</div>
		</SiteHeader>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
