import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GenericPara } from "../styles/IndexStyles"
import styled from 'styled-components'

const SiteHeader = styled.header`
	display: flex;
	margin: 0 auto;
	// justify-content: space-between;
	padding: 40px var(--size-gutter);
	align-items: center;
	width: 100%;
	height: 30px;
	background-color: transparent;
	color: #ffffff;
	padding: 3rem 0;
	z-index: 1000;
	position: absolute;
	top: 0;
	left: 0;
	.menu__items {
		position: fixed;
		left: 76%;
		padding:15px 10px;
		margin-top:0px;
		transform: translateX(-50%);
		background: whitesmoke;
		display: flex;
		text-transform: uppercase;
		border-left: 6px solid #666;
	}
	.menu__items > * {
		margin-right: 1rem;
	}
`

const MenuItem = styled.span`
	color: ${props => props.selected ? `#9b9b00` : `#666`};
	font-size: 24px;
	font-weight: bold;
	padding:10px;
	font-family: 'Poppins';
    color: ;
	// background: ${props => props.selected ? 'lightgrey' : 'white'};
`
const Header = ({ siteTitle }) => (
	<SiteHeader>
		<Link
			to="/"
			style={{
				fontSize: `var(--font-sm)`,
				textDecoration: `none`,
			}}
		>
			{siteTitle}
		</Link>
		<div className="menu__items">
			<Link to="/portfolio" style={{textDecoration: `none`}}>
				<MenuItem selected>Home</MenuItem>
			</Link>
			<Link to="/portfolio" style={{textDecoration: `none`}}>
				<MenuItem>Portfolio</MenuItem>
			</Link>
			<Link to="/contact" style={{textDecoration: `none`}}>
				<MenuItem>Contact</MenuItem>
			</Link>
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
