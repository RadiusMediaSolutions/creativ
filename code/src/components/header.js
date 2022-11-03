import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GenericPara } from "../styles/IndexStyles"
import { Link } from "gatsby"
import Logo from "../images/logo-small.png"
import PropTypes from "prop-types"
import { faSkyatlas } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const SiteHeader = styled.header`
	.menu__items {
		padding: 10px 30px;
		margin-top: 0px;
		background: whitesmoke;
		text-transform: uppercase;
		border: 2px solid #9b9b01;
		// border-left: 6px solid #9b9b01;
		display: flex;
    	align-items: center;
	.menu__items > * {
		margin-right: 1rem;
	}
	.site-logo a{
		color:#9b9b00 !important;
		font-weight:bold;
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
						{/* <FontAwesomeIcon
							icon={faSkyatlas}
							color="#9b9b00 !important;"
							size="3x"
						/> */}
					</Link>
				</div>
				<Link to="/" style={{ textDecoration: `none` }}>
					<MenuItem selected>Home</MenuItem>
				</Link>
				<Link to="/portfolio" style={{ textDecoration: `none` }}>
					<MenuItem>Portfolio</MenuItem>
				</Link>
				<Link to="/contact" style={{ textDecoration: `none` }}>
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
