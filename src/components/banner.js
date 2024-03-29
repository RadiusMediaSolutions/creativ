import * as React from "react"

import {
	faFacebook,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Hero = styled.div`
	& {
		background: #2b2d2f;
		// height: 80vh;
		clip-path: none;
		// position: absolute;
	}
`

const TextWrapper = styled.div`
	margin-top: 70px;
	position: absolute;
	z-index: 1000;
	left: 10%;
	top: 50%;
	transform: translate(-10%, -50%);
	color: white;
	div {
		display: flex;
		justify-content: center;
		align-items: left;
		flex-direction: column;
	}
	h2 {
		position: absolute;
		font-size: 60px;
		color: #ffff66;
		/*   margin-top:100px; */
		bottom: 100px;
		// padding-left: 30px;
		padding-bottom: 20px;
		z-index: 2000;
	}
	h1 span {
		text-transform: uppercase;
		font-family: "poppins";
		background-image: url(${props => props.bgImage});
		background-position: left center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		// padding-left: 20px;
		-webkit-text-stroke: 1px yellow;
		z-index: 1000;
		font-size: 150px;
	}
	h3 {
		font-size: 1.5rem;
		text-transform: uppercase;
		margin: 0;
		letter-spacing: 2px;
	}
	p {
		text-transform: uppercase;
		padding-left: 20px;
		font-family: "poppins";
		color: white;
		font-weight: 900;
		font-size: 30px;
		padding-bottom: 0px;
	}
`

const BannerFooter = styled.div`
	display: ${props => (props.inner ? "none" : "block")};
	position: relative;
	background: linear-gradient(91deg, rgb(195 195 0 / 75%), #ddca7e);
	height: 10vh;
	z-index: 100;
	.icon-set-group {
		padding-left: 150px;
		padding-top: 20px;
		color: #666;
		font-size: 4vh;
		font-weight: bold;
		margin-left: 50px;
	}
	svg {
		padding-right: 100px;
	}
`
const MoreLink = styled.a`
	display: ${props => (props.inner ? "none" : "inline-block")};
	position: relative;
	background-color: #ed4933;
	box-shadow: none;
	color: white;
	border-radius: 5px;
	border: 0;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	/*     letter-spacing: 0.1em; */
	padding: 1.5rem 0.8rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	margin-left: 100px;
	top: 50px;
	left: 70px;
`
const Banner = ({
	bgImage,
	inner,
	h2Content,
	h3Content,
	spanContent,
	children,
}) => {
	return (
		<>
			<div className="mbanner">
				<Hero className="clipath" bgImage={bgImage} inner={!!inner}>
					{children}
				</Hero>

				<TextWrapper bgImage={bgImage} className="textWrapper">
					<div
						className="op-class heroTitle"
						data-scroll
						data-scroll-class="fadeIn"
						data-scroll-repeat="true"
						data-scroll-speed="1"
					>
						<h2>{h2Content}</h2>
						<h1>
							<span>{spanContent}</span>
						</h1>
						<h3>{h3Content}</h3>
					</div>
					<MoreLink inner={inner} className="moreBtn">
						Learn More
					</MoreLink>
				</TextWrapper>
			</div>
			<BannerFooter>
				<div className="icon-set-group">
					<FontAwesomeIcon icon={faTwitter} color="#666;" size="1x" />
					<FontAwesomeIcon
						icon={faFacebook}
						color="#666;"
						size="1x"
					/>
					<FontAwesomeIcon
						icon={faLinkedin}
						color="#666;"
						size="1x"
					/>
				</div>
			</BannerFooter>
		</>
	)
}

export default Banner
