import * as React from "react"

import { GenericPara } from "../styles/IndexStyles"
import { Link } from "gatsby"
import Logo from "../images/develop_logo.png"
import PropTypes from "prop-types"
import styled from "styled-components"

const SiteHeader = styled.header`
	.menu__items {
		padding: 15px 10px;
		margin-top: 0px;
		background: whitesmoke;
		text-transform: uppercase;
		border: 2px solid #9b9b01;
		border-left: 6px solid #9b9b01;
	}
	.menu__items > * {
		margin-right: 1rem;
	}
`

const MenuItem = styled.span`
	color: ${props => (props.selected ? `#9b9b00` : `#666`)};
	font-size: 24px;
	font-weight: bold;
	padding: 10px;
	font-family: "Poppins";
	color: ;
	// background: ${props => (props.selected ? "lightgrey" : "white")};
`
const Header = ({ siteTitle }) => (
	<SiteHeader>
		<div class="fixed-top">
			<Link
				to="/"
				style={{
					fontSize: `var(--font-sm)`,
					textDecoration: `none`,
				}}
			>
				{/* {siteTitle} */}
				<div class="siteLogo">
					{/* <FontAwesomeIcon icon={faSkyatlas} color="#666;" size="1x" /> */}

					<img src={Logo} alt="Logo" width="80" />
				</div>
			</Link>
			<div className="menu__items">
				<Link to="/portfolio" style={{ textDecoration: `none` }}>
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
