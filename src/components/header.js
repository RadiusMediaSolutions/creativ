import * as React from "react"

import { Link } from "gatsby"
import Logo from "../images/logo-small.png"
import PropTypes from "prop-types"
import styled from "styled-components"

const SiteHeader = styled.header`
	.menu__items {
		padding: 10px 30px;
		margin-top: 0px;
		background: whitesmoke;
		text-transform: uppercase;
		display: flex;
    	align-items: center;
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
const Header = ({ siteTitle }) => (
	<SiteHeader>
		<div class="fixed-top">
			<div className="menu__items">
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

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
