import * as React from "react"

import styled, { keyframes } from "styled-components"

import Canvas from "../components/canvas"
import { FlexBoxIndex } from "../styles/IndexStyles"
import { Link } from "gatsby"

const cssProps = {
	white: `#fff`,
	red: `#ea4335`,
	green: `#34a853`,
	yellow: `#fbbc05`,
	black: `#000`,
	speed: `10s`,
}
const cursor = keyframes`
	0% {
		background-color: ${cssProps["red"]};
		transform: translate(24rem, 0rem);
		z-index: 100;
	}
	15% {
		background-color: ${cssProps["red"]};
		transform: translate(-0rem, 0rem);
		z-index: 100;
		width: 24rem;
	}
	30% {
		background-color: ${cssProps["red"]};
		transform: translate(-2rem, 0rem);
		width: 1rem;
	}
	40% {
		background-color: ${cssProps["yellow"]};
		transform: translate(-2rem, 5rem);
		width: 1rem;
	}
	50% {
		background-color: ${cssProps["yellow"]};
		transform: translate(0rem, 5rem);
		width: 20rem;
	}
	60% {
		background-color: ${cssProps["green"]};
		transform: translate(0rem, 9.5rem);
		width: 20rem;
	}
	80% {
		transform: translate(-10rem, 9.5rem);
		background-color: ${cssProps["green"]};
	}
	89% {
		transform: translate(-20rem, 9.5rem);
		background-color: ${cssProps["green"]};
		z-index: 2;
	}
	99% {
		z-index: -100;
		background-color: ${cssProps["red"]};
	}
`
const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	font-size: 40px;
	font-weight: bold;
	background: transparent;
	z-index: 100;
	text-transform: uppercase;
	font-family: sans-serif;
	padding: 3vmin;
	overflow: hidden;
	h1 {
		margin: 3rem;
		font-size: 4rem;
		display: inline-flex;
		align-items: flex-start;
		flex-direction: column;
		line-height: 1.2;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
	}
	span {
		display: flex;
	}
	#a {
		color: ${cssProps.red};
		// background-color: #fff;
		animation-name: css;
		animation-duration: calc(${cssProps.speed} / 4);
		animation-delay: 0s;
	}
	#b {
		color: ${cssProps.yellow};
		// background-color: #fff;
		animation-name: css;
		animation-duration: calc(${cssProps.speed} / 2) infinite;
	}
	#c {
		color: ${cssProps.green};
		animation-name: css;
		animation-duration: calc(${cssProps.speed} / 1.4) infinite;
	}
	i {
		display: flex;
		position: absolute;
		height: 5rem;
		width: 1rem;
		background-color: red;
		z-index: 120;
		transform: translate(22rem, 0rem);
		animation: ${cursor} ${cssProps.speed};
		animation-iteration-count: 5;
	}
`

const Companies = () => {
	return (
		<>
			<div style={{ display: `flex`, backgroundColor: `#2b2d2f` }}>
				<FlexBoxIndex>
					<Container>
						<h1>
							<i></i>
							<span id="a">Prepared</span>
							<span id="b">For</span>
							<span id="c">Change</span>
						</h1>
					</Container>
				</FlexBoxIndex>
				<FlexBoxIndex inverse>
					<Canvas />
				</FlexBoxIndex>
			</div>
		</>
	)
}
export default Companies
