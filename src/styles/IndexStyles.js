import styled from "styled-components"

const MoreText = styled.div`
	position: absolute;
	color: #ffffff;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.225em;
	font-weight: 600;
	font-size: 1rem;
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
	padding: 5rem 0 2rem 0;
	div {
		// width: 66%;
		margin: 0 auto;
	}

	h2 {
		font-family: Roboto;
		font-size: 3rem;
		font-weight: 100;
		padding: 1.5rem 0;
		color: #9b9b01;
		text-transform: uppercase;
		margin: 0;
		text-align: left;
		&:after {
			content: "";
			display: flex;
			height: 0.2rem;
			width: 8rem;
			background: var(--heading-color);
			margin-top: 15px;
		}
	}

	p {
		// text-transform: uppercase;
		color: #c8ece9;
		text-align: justify;
		padding-top: 0.5rem;
		font-size: 1.1rem;
	}

	h5 {
		font-size: 1.4rem;
		line-height: 2rem;
		color: #ffffff;
		font-weight: 700
		letter-spacing: 0.225em;
		text-transform: uppercase;
		padding-bottom: 0.5rem;
		margin-bottom: 5rem;
	}
`

const SectionThree = styled.section`
	background-color: whitesmoke;
	color: #ffffff;
`

const FlexBoxIndex = styled.div`
	display: flex;
	align-items: center;
	.image {
		width: ${props => (props.inverse ? "50%" : "50%")};
	}
	img {
		width: 100%;
		margin-bottom: 0;
	}
	.text_section3 {
		width: ${props => (props.inverse ? "50%" : "50%")};
		display: flex;
		justify-content: center;
		// align-items: center;
		flex-direction: column;
		margin-left: 2rem;
	}
	h2 {
		font-size: 3rem;
		font-weight: 100;
		color: var(--heading-color);
		text-transform: uppercase;
		margin: 0;
	}
	h3 {
		font-size: 1.5rem;
		text-align: left;
		text-transform: uppercase;
	}
	p {
		// text-transform: uppercase;
		color: black;
		text-align: justify;
		font-size: 1rem;
		// margin: 0 auto;
	}
	.processList {
		display: flex;
		margin-left: 0;
		margin-bottom: 50px;
	}
	.processList li {
		font-size: 14px;
		list-style: outside none;
		margin-right: 10px;
		padding-left: 50px;
		position: relative;
		font-weight: 600;

		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 0;
			width: 40px;
			height: 1px;
			background: var(--heading-color);
			&:hover {
				transform: rotate(45deg);
			}
		}
	}
`

const PostPara = styled.p`
	margin: 0;
	max-width: 100% !important;
	font-size: ${props => (props.lessSize ? "1rem" : "1rem")} !important;
	line-height: ${props => (props.lessSize ? "2rem" : "3rem")} !important;
	color: ${props => (props.grey ? "#000000" : "#666666")} !important;
`

const GenericPara = styled.p`
	margin: 0 auto;
	font-size: ${props => (props.lessSize ? "1rem" : "1rem")} !important;
	line-height: ${props => (props.lessSize ? "2rem" : "3rem")} !important;
	color: ${props => (props.grey ? "#000000" : "#666666")} !important;
`

const GenericH2 = styled.h2`
	font-size: ${props => (props.lessSize ? "2rem" : "3rem")} !important;
	padding: ${props => (props.none ? "" : "1em 0")} !important;
	border-top: ${props => (props.none ? "0" : "2px solid #1d9c91")} !important;
	border-bottom: ${props =>
		props.none ? "0" : "2px solid #1d9c91"} !important;
`
const GenericH3 = styled.h3`
	font-size: ${props => (props.lessSize ? "1rem" : "1.5rem")} !important;
	padding: ${props => (props.none ? "" : "1em 0")} !important;
	margin-bottom: ${props => (props.none ? "0.5rem" : "1rem")} !important;
	border-top: ${props => (props.none ? "0" : "2px solid #1d9c91")} !important;
	border-bottom: ${props =>
		props.none ? "0" : "2px solid #1d9c91"} !important;
`

const SectionFour = styled.section`
	background-color: whitesmoke;
	color: #000;
	text-align: center;
	.header__section4 {
		width: 66%;
		margin: 0 auto;
	}
	.title__section4 {
		font-family: Roboto;
		font-size: 3rem;
		font-weight: 100;
		padding: 1em 0;
		color: var(--heading-color);
		// border-bottom: 2px solid #464981;
		text-transform: uppercase;
		margin: 0;
		position: relative;
		&:after {
			content: "";
			display: flex;
			margin: 0 auto;
			height: 0.2rem;
			width: 8rem;
			background: var(--heading-color);
			margin-top: 15px;
			// position: absolute;
			left: 35%;
			bottom: 30px;
		}
		span {
			font-weight: 700;
		}
	}
	.grid__section4 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 50px;
		width: 100%;
		margin: 0 auto;
		padding: 3rem 0;
	}
	.grid__section4 > * {
		padding: 5rem 3rem;
	}
	.flex__section4 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	.flex__section4 > h2 {
		color: #fff;
		margin-left: 1rem;
		font-size: 1.7rem !important;
		text-transform: uppercase;
		font-weight: 500;
	}
`
const SectionFive = styled.section`
	background-color: whitesmoke;
	color: #ffffff;
	text-align: center;
	padding: 3rem 0;
	.header__section4 {
		width: 66%;
		margin: 0 auto;
	}
	.header__section4 p {
		color: #000;
	}
	.title__section5 {
		font-family: Roboto;
		font-size: 3rem;
		font-weight: 100;
		padding-bottom: 1em;
		color: var(--heading-color);
		// border-bottom: 2px solid #464981;
		text-transform: uppercase;
		margin: 0;
		position: relative;
		&:after {
			content: "";
			display: flex;
			height: 0.2rem;
			width: 8rem;
			background: var(--heading-color);
			margin: 15px auto;
			// position: absolute;
			left: 34%;
			bottom: 30px;
		}
		span {
			font-weight: 700;
		}
	}
	.grid__section4 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;
		width: 100%;
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
		font-family: Roboto;
	}
	.flex__section4 p {
		color: #fff !important;
	}
`

const Ftr = styled.footer`
	width: 100%;
	margin-top: 3rem;
	background-color: #1d242a;
	color: rgba(255, 255, 255, 0.8) !important;
	padding-bottom: 50px;

	.icons > * {
		cursor: pointer;
		margin-right: 1rem;
		color: rgba(255, 255, 255, 0.5);
	}
	p {
		color: rgba(255, 255, 255, 0.8) !important;
		font-size: 1rem !important;
		font-weight: 400;
		padding: 0;
	}
	a {
		color: rgba(255, 255, 255, 0.8) !important;
	}
	// .copyright {
	// 	display: flex;
	// 	justify-content: center;
	// 	background: #171b1e;
	// 	padding: 10px 0;
	// }
`

const Works = styled.div`
	color: #4e4852;
	padding: 2em 0 1em 0 !important;
	.gallery__flex {
		display: grid;
		// grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;
		justify-items: center;
	}
`

const ContactSection = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;
	width: 100%;
	text-align: center;

	.box {
		border: 1px solid #ddd;
		padding: 50px;
	}
	p {
		color: rgba(255, 255, 255, 0.5);
		font-size: 1rem !important;
		font-weight: 400;
		padding: 0;
		text-align: center;
	}
`
const CntForm = styled.div`
	margin: 3rem 0;
	h2 {
		font-size: 2rem;
		span {
			font-weight: 700;
		}
	}
	p {
		color: rgba(255, 255, 255, 0.5);
		font-size: 1rem !important;
		font-weight: 400;
		padding: 0;
		text-align: left;
		display: inline;
		margin-bottom: 20px;
	}
	form {
		margin-top: 20px;
	}
	input,
	textarea {
		display: block;
		width: 600px;
		border: 1px solid #ccc;
		padding: 10px;
		margin-bottom: 20px;
		background: transparent;
	}
	button {
		padding: 15px 30px;
		cursor: pointer;
		background: #9b9b01;
		border: none;
		font-size: 1rem;
		color: white;
		text-transform: uppercase;
	}
`
const Clients = styled.div`
	margin: 5rem 0;
	h2 {
		text-align: center !important;
	}
	p {
		color: rgba(255, 255, 255, 0.5);
		font-size: 1rem !important;
		font-weight: 400;
		padding: 1rem 0;
		text-align: left;
		display: block;
		max-width: 100%;
		margin-bottom: 20px;
	}
	.gallery .card {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		// grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 20px;
	}
`

const OurTeam = styled.section`
	background-color: whitesmoke;
	color: #000;
	margin: 2rem auto;
	.text_Section3 {
		h2 {
			margin-bottom: 0;
		}
		p {
			font-size: 1rem !important;
			line-height: 2rem !important;
			color: #666666 !important;
			max-width: 900px;
			margin-right: 3rem;
			margin-top: 1.5rem;
		}
		.teamImg {
			margin: 0 auto;
		}
	}
	.title__section4 {
		font-family: Roboto;
		font-size: 3rem;
		font-weight: 100;
		padding: 1em 0;
		text-align: left;
		color: var(--heading-color);
		// border-bottom: 2px solid #464981;
		text-transform: uppercase;
		margin: 0;
		position: relative;
		&:after {
			content: "";
			display: flex;
			margin: 0 auto;
			height: 0.2rem;
			width: 8rem;
			background: var(--heading-color);
			margin-top: 15px;
			// position: absolute;
			bottom: 30px;
		}
		span {
			font-weight: 700;
		}
	}
`
const TimeLine = styled.section`
	background-color: whitesmoke;
	color: #000;
	margin: 2rem auto;
	.text_Section3 {
		h2 {
			margin-bottom: 1.2rem;
		}
		p {
			font-size: 1rem !important;
			line-height: 2rem !important;
			color: #666666 !important;
		}
		ul{
			margin:0;
		}
		h3{
			margin-bottom:.5rem;
			span{
				font-style:italic;
			}
		}
		a.ctBtn{
			border: 1px solid #9b9b01;
			box-shadow: none;
			color: #9b9b01;
			border-radius: 5px;
			cursor: pointer;
			font-size: 1.2rem;
			font-weight: 600;
			padding: 0.8rem;
			text-align: center;
			text-transform: uppercase;
			margin-bottom: 30px;
			display:inline-flex;
}
`
const ServiceList = styled.section`
	background-color: whitesmoke;
	color: #000;
	.text_Section3 {
		h4 {
			text-align: left;
			margin-bottom: 0.5rem;
		}
	}
	.mColumn {
		p {
			font-size: 1rem !important;
			line-height: 2rem !important;
			color: #666666 !important;
			max-width: 900px;
			margin-right: 3rem;
			margin-top: 1.5rem;
		}
	}
`
const ClientTemplate = styled.section`
	background-color: whitesmoke;
	color: #000;
	margin: 2rem auto;
	.text_Section3 {
		h2 {
			margin-bottom: 0;
		}
		p {
			font-size: 1rem !important;
			line-height: 2rem !important;
			color: #666666 !important;
			max-width: 900px;
			margin-right: 3rem;
			margin-top: 1.5rem;
		}
		.teamImg {
			margin: 0 auto;
		}
	}
`
export {
	MoreText,
	SectionTwo,
	SectionThree,
	FlexBoxIndex,
	GenericPara,
	PostPara,
	GenericH2,
	GenericH3,
	SectionFour,
	SectionFive,
	Ftr,
	Works,
	ContactSection,
	CntForm,
	Clients,
	OurTeam,
	TimeLine,
	ServiceList,
	ClientTemplate,
}
