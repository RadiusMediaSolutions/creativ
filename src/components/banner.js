import * as React from "react"

import { GenericPara, MoreText } from "../styles/IndexStyles"
import { faCode, faGem, faHeart, fas } from "@fortawesome/free-solid-svg-icons"
import {
	faFacebook,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Projectbackground from "../images/portfolio.jpg"
import background from "../images/road.jpeg"
import styled from "styled-components"

// import { Projectbackground, background } from "../images"
const Hero = styled.div`
	& {
		background: #2b2d2f;
		height: 80vh;
		// position: absolute;
	}
	&:after {
		z-index: 110;
		content: "";
		display: block;
		height: ${props => (props.inner ? `80vh` : `90vh`)};
		width: 100%;
		position: relative;
		background-image: url(${props => props.bgImage});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 60% 100%);
	}
	& > * {
		z-index: 150;
	}
`

const TextWrapper = styled.div`
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
		padding-left: 30px;
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
		padding-left: 20px;
		-webkit-text-stroke: 1px yellow;
		z-index: 1000;
		font-size: 150px;
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
		padding-top: 10px;
		color: #666;
		font-size: 5vh;
		font-weight: bold;
		margin-left: 50px;
	}
	svg {
		padding-right: 100px;
	}
`
const MoreLink = styled.a`
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
const Banner = ({ bgImage, inner, h2Content, spanContent }) => {
	return (
		<>
			<div>
				<Hero bgImage={bgImage} inner={!!inner} />

				<TextWrapper bgImage={bgImage}>
					<div>
						<h2>{h2Content}</h2>
						<h1>
							<span>{spanContent}</span>
						</h1>
						{/* <p>Develop your inner beast</p> */}
					</div>
					<MoreLink>Learn More</MoreLink>
				</TextWrapper>
			</div>
			<BannerFooter inner={inner}>
				<div class="icon-set-group">
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

// export { Banner, InnerBanner }
