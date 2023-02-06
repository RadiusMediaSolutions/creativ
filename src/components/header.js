import * as styles from "../styles/navbar.module.css"

import React, { useState } from "react"

import { FaAlignRight } from "react-icons/fa"
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
// const isBrowser = () => typeof window !== "undefined"

const Header = ({ sticky, siteTitle }) => {
	const [isOpen, setNav] = useState(false)
	const toggleNav = () => {
		setNav(isOpen => !isOpen)
	}

	return (
		<SiteHeader>
			<div className={sticky ? `fixed-top onactive` : `fixed-top`}>
				<nav className="menubar">
					<div className={styles.navCenter}>
						<div className="navBg">
							<div className={styles.navHeader}>
								<Link to="/" className="onLeft">
									<img
										src={Logo}
										className={styles.brandLogo}
										alt="backroads logo"
									/>
								</Link>
								<button
									type="button"
									className={styles.logoBtn}
									onClick={toggleNav}
								>
									<FaAlignRight className={styles.logoIcon} />
								</button>
							</div>
							<ul
								className={
									isOpen
										? `${styles.navLinks} ${styles.showNav}`
										: `${styles.navLinks}`
								}
							>
								<Link
									exact="true"
									activeClassName="active"
									to="/"
									style={{ textDecoration: `none` }}
								>
									<MenuItem>Home</MenuItem>
								</Link>
								<Link
									activeClassName="active"
									to="/about"
									style={{ textDecoration: `none` }}
								>
									<MenuItem>About</MenuItem>
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
							</ul>
						</div>
					</div>
				</nav>
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
