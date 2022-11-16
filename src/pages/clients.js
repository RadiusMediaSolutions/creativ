import {
	Clients,
	GenericH2,
	GenericH3,
	GenericPara,
} from "../styles/IndexStyles"

import Banner from "../components/banner"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import background from "../images/flats-at-springhurst.jpg"
import springhurst from "../images/flats-at-springhurst.jpg"
import styled from "styled-components"

const MoreButton = styled.a`
	border: 1px solid #9b9b01;
	box-shadow: none;
	color: #9b9b01;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	padding: 1rem 0.8rem;
	text-transform: uppercase;
	margin-top: 50px;
	display: inline-block;
`

export default () => {
	return (
		<Layout>
			<div style={{ position: "relative" }}>
				<Banner
					bgImage={background}
					inner
					h2Content="FLATS AT SPRINGHURST"
					// spanContent="Project"
				></Banner>
			</div>
			<Clients className="singlePjt">
				<GenericH3 none>PROJECT GALLERY</GenericH3>
				<GenericPara lessSize>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humour, or randomised words which don’t
					look even slightly believable. If you are going to use a
					passage of Lorem Ipsum, you need to be sure there isn’t
					anything embarrassing hidden in the middle of text. All the
					Lorem Ipsum generators on the Internet tend to repeat
					predefined chunks as necessary, making this the first true
					generator on the Internet. It uses a dictionary of over 200
					Latin words
				</GenericPara>

				<div className="gallery">
					<div class="card">
						<img src={springhurst} alt="Logo" />
						<img src={springhurst} alt="Logo" />
						<img src={springhurst} alt="Logo" />
						<img src={springhurst} alt="Logo" />
					</div>
				</div>
				<MoreButton>View Details</MoreButton>
			</Clients>
		</Layout>
	)
}
