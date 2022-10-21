import styled from "styled-components"

const MoreText = styled.div`
	position: absolute;
	color: #ffffff;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.225em;
	font-weight: 600;
	font-size: 1.2rem;
	z-index: 1;
	left: 50%;
	bottom: 10%;
	transform: translate(-50%, -50%);
	&:after {
		content: "";
		display: block;
		height: 2rem;
		width: 2rem;
		left: 50%;
		position: absolute;
		margin: 1em 0 0 -0.75em;
		background-image: url("https://img.icons8.com/ios-glyphs/30/000000/arrow.png");
		background-size: cover;
		background-position: center;
	}
`

const SectionTwo = styled.section`
	position: relative;
	background-color: whitesmoke;
	text-align: center;
	padding: 10rem 0;
	div {
		// width: 66%;
		margin: 0 auto;
	}

	h2 {
		font-size: 3rem;
		padding: 1.5rem 0;
		color: #9b9b01;
		border-bottom: 2px solid #1d9c91;
		text-transform: uppercase;
		letter-spacing: 0.6rem;
		margin: 0;
		&:after {
			content: "";
			display: block;
			height: 0.5rem;
			width: 8rem;
			position: absolute;
			background: var(--heading-color);
			margin-top: 15px;
		}
	}

	p {
		// text-transform: uppercase;
		color: #c8ece9;
		text-align: center;
		margin: 0 auto;
		padding-top: 0.5rem;
		letter-spacing: 0.225em;
		font-size: 1.5rem;
	}

	h5 {
		font-size: 1.4rem;
		line-height: 2rem;
		color: #ffffff;
		border-bottom: 2px solid #1d9c91;
		font-weight: 800;
		letter-spacing: 0.225em;
		text-transform: uppercase;
		padding-bottom: 0.5rem;
		margin-bottom: 5rem;
	}
`

const SectionThree = styled.section`
	background-color: #2b343d;
	color: #ffffff;
`

const FlexBoxIndex = styled.div`
	display: flex;
	.image {
		width: ${props => (props.inverse ? "60%" : "40%")};
	}
	img {
		width: 100%;
		margin-bottom: 0;
	}
	.text_section3 {
		width: ${props => (props.inverse ? "40%" : "60%")};
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	h2 {
		font-size: 3rem;
		color: var(--heading-color);
		text-transform: uppercase;
		letter-spacing: 0.225rem;
		margin: 0;
	}
	p {
		// text-transform: uppercase;
		color: #c8ece9;
		text-align: center;
		letter-spacing: 0.075em;
		font-size: 1.5rem;
		margin: 0 auto;
	}
`

const GenericPara = styled.p`
	margin: 0 auto;
	letter-spacing: ${props =>
		props.lessSpacing ? "0.075em" : "0.225em"} !important;
	font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")} !important;
	line-height: ${props => (props.lessSize ? "2rem" : "3rem")} !important;
	color: ${props => (props.grey ? "#c8ece9" : "#666666")} !important;
`

const GenericH2 = styled.h2`
	font-size: ${props => (props.lessSize ? "2rem" : "3rem")} !important;
	padding: ${props => (props.none ? "1em" : "1.35em 0")} !important;
	border-top: ${props => (props.none ? "0" : "2px solid #1d9c91")} !important;
	border-bottom: ${props =>
		props.none ? "0" : "2px solid #1d9c91"} !important;
`

const SectionFour = styled.section`
	background-color: #505393;
	color: #ffffff;
	text-align: center;
	.header__section4 {
		width: 66%;
		margin: 0 auto;
	}
	.title__section4 {
		font-size: 3rem;
		padding: 1.35em 0;
		color: #ffffff;
		border-bottom: 2px solid #464981;
		text-transform: uppercase;
		margin: 0;
	}
	.grid__section4 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 90%;
		margin: 0 auto;
		padding: 3rem 0;
	}
	.grid__section4 > * {
		padding: 3rem;
	}
	.flex__section4 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	.flex__section4 > h2 {
		margin-left: 1rem;
	}
`

const Footer = styled.footer`
	padding: 6em 0 4em 0;
	background-color: #1d242a;
	text-align: center;
	.icons > * {
		cursor: pointer;
		margin-right: 1rem;
		color: rgba(255, 255, 255, 0.5);
	}
	.copyright {
		color: rgba(255, 255, 255, 0.5);
		font-size: 1.2rem;
		letter-spacing: 0.225em;
		padding: 0;
		text-transform: uppercase;
		margin-top: 1rem;
	}
`

const Works = styled.div`
	background-color: #ffffff;
	color: #4e4852;
	padding: 2em 0 1em 0 !important;
	.gallery__flex {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 20px;
		justify-items: center;
	}
`
export {
	MoreText,
	SectionTwo,
	SectionThree,
	FlexBoxIndex,
	GenericPara,
	GenericH2,
	SectionFour,
	Footer,
	Works,
}
