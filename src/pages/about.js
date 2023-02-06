import * as React from "react"

import {
	FlexBoxIndex,
	GenericH2,
	GenericPara,
	OurTeam,
	SectionFive,
	SectionTwo,
} from "../styles/IndexStyles"

import Banner from "../components/banner"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import about from "../images/our-story.jpg"
import background from "../images/skynet_heroImg.jpg"
import styled from "styled-components"
import team from "../images/skynet-team.jpg"

const MoreButton = styled.a`
	border: 1px solid #9b9b01;
	box-shadow: none;
	color: #9b9b01;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	/*     letter-spacing: 0.1em; */
	padding: 0.8rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	margin: 30px auto;
	width: fit-content;
`
const About = () => (
	<Layout>
		<div style={{ position: "relative" }}>
			<Banner
				style={{ marginTop: "42px" }}
				bgImage={background}
				inner
				h2Content="ABOUT"
				spanContent="SKYNET"
				h1Content=""
			>
				<StaticImage
					src="../images/skynet_heroImg.jpg"
					alt="landscape"
					style={{
						height: `80vh`,
						width: `100%`,
					}}
					data-scroll
					data-scroll-direction="vertical"
					data-scroll-speed="-1"
				/>
			</Banner>
		</div>
		{/* <FeaturedClients /> */}

		<SectionTwo>
			<FlexBoxIndex className="mColumn">
				<div
					className="image lg"
					data-scroll
					data-scroll-direction="vertical"
					data-scroll-repeat="true"
					data-scroll-speed="2"
				>
					<img src={about} alt="about" style={{ maxWidth: "70%" }} />
				</div>
				<div className="text_section3">
					<h2>
						OUR AWESOME <span>STORY</span>
					</h2>
					<div
						className="image small"
						data-scroll
						data-scroll-direction="vertical"
						data-scroll-repeat="true"
						data-scroll-speed="2"
					>
						<img
							src={about}
							alt="about"
							style={{ maxWidth: "70%" }}
						/>
					</div>
					{/* <GenericH2 none>WELCOME SKY DEVELOP</GenericH2> */}
					<GenericPara lessSize lessSpacing style={{ margin: "0" }}>
						Skynet is a global consulting powerhouse. We began our
						operations a few decades ago and have grown due to
						excellent relationships with our clients. We started out
						small, with just a few people and a small office, but
						today we have offices in multiple countries with
						hundreds of people working inside them.
					</GenericPara>
					<h3>What we do</h3>
					<ul className="processList">
						<li
							data-scroll
							data-scroll-direction="vertical"
							data-scroll-speed="1"
						>
							DESIGN
						</li>
						<li
							data-scroll
							data-scroll-direction="vertical"
							data-scroll-speed="2"
						>
							ARCHITECTURE
						</li>
						<li
							data-scroll
							data-scroll-direction="vertical"
							data-scroll-speed="3"
						>
							CONSTRUCTION
						</li>
					</ul>
				</div>
			</FlexBoxIndex>
		</SectionTwo>

		<OurTeam>
			<div
				className="header__section4 op-class"
				data-scroll
				data-scroll-class="fadeIn"
				data-scroll-repeat="true"
				data-scroll-speed="2"
			>
				<h2>
					OUR FANTASTIC <span>TEAM</span>
				</h2>
				<p>
					We achieved our success because of how successfully we
					integrate with our clients. One complaint many people have
					about consultants is that they can be disruptive. Employees
					fear outside consultants coming in and destroying the
					workflow. Our clients face no such issues. This disciplined
					approach lets us make recommendations and propose solutions
					based on technically validated results. So you’ll know the
					right move to make to grow your business. Whether you’re
					looking to work with us or work for us, you’ll experience a
					dedication and passion to questioning everything until we
					find the right thing.
				</p>
				<p>
					We take a consistent approach to recruiting and skills
					development regardless of where our people are located, so
					that we can quickly deliver the right team, with the right
					experience and expertise, to every client, anywhere in the
					world.Our consultants include engineers, designers,
					auditors, business managers, software engineers.
				</p>
				<img src={team} alt="Skynet Team Picture" className="teamImg" />
			</div>
		</OurTeam>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default About
