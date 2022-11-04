import * as React from "react"
import * as styles from "../components/index.module.css"

import {
	FlexBoxIndex,
	GenericH2,
	GenericPara,
	SectionFive,
	SectionFour,
	SectionThree,
	SectionTwo,
} from "../styles/IndexStyles"
import {
	MoreText,
	faCode,
	faGem,
	faHeart,
	fas,
} from "@fortawesome/free-solid-svg-icons"
import {
	faCss3,
	faGalacticSenate,
	faHtml5,
	faJs,
	faReact,
} from "@fortawesome/free-brands-svg-icons"

import Banner from "../components/banner"
import Companies from "../components/companies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/road.jpeg"
import bolt from "../images/bolttie.jpeg"
import { library } from "@fortawesome/fontawesome-svg-core"
import springhurst from "../images/flats-at-springhurst.jpg"
import styled from "styled-components"

const MoreButton = styled.a`
	position: relative;
	border: 1px solid #9b9b01;
	box-shadow: none;
	color: #9b9b01;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	/*     letter-spacing: 0.1em; */
	padding: 1rem 0.8rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	margin-left: 100px;
	top: 50px;
`
const IndexPage = () => (
	<Layout>
		<div style={{ position: "relative" }}>
			<Banner
				bgImage={background}
				h2Content="SKY"
				spanContent="Develop"
			></Banner>
		</div>
		<SectionTwo>
			<FlexBoxIndex>
				<div className="image">
					<img
						src="https://source.unsplash.com/XJXWbfSo2f0/600x400"
						alt="Picture 1"
					/>
				</div>
				<div className="text_section3">
					<GenericH2 none>WELCOME SKY DEVELOP</GenericH2>
					<GenericPara lessSize lessSpacing>
						Our proven methodology creates a comprehensive strategy
						combining the services of an architect, an engineer and
						a construction manager as one unified package towards
						your construction goals whether its the design of a new
						building or a renovation or remodel of existing space.
					</GenericPara>

					<MoreButton>Learn More</MoreButton>
				</div>
			</FlexBoxIndex>
		</SectionTwo>
		{/* <SectionThree>
			<div>
				<GenericH2>Our Passion</GenericH2>
				<GenericPara lessSize grey>
					Most good programmers program because they love doing what
					they do
				</GenericPara>
				<h5>Some dude</h5>
				<span>
					<FontAwesomeIcon
						icon="gem"
						color="#04F5C6"
						size="6x"
						style={{ marginRight: "3rem" }}
						fixedWidth
						border
					/>
					<FontAwesomeIcon
						icon="heart"
						color="#04F5C6"
						size="6x"
						style={{ marginRight: "3rem" }}
						fixedWidth
						border
					/>
					<FontAwesomeIcon
						icon="faGem"
						color="#04F5C6"
						size="6x"
						style={{ marginRight: "3rem" }}
						fixedWidth
						border
					/>
				</span>
			</div>
		</SectionThree> */}

		<Companies></Companies>
		<SectionFour>
			<div className="header__section4">
				<div className="title__section4">Our Services</div>
				<GenericPara lessSize grey>
					We use modern and latest technologies which help our clients
					<br /> as they are high scalable and maintainable
				</GenericPara>
			</div>
			<div className="grid__section4">
				<div
					className="item1"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<div className="flex__section4">
						<FontAwesomeIcon
							icon={faReact}
							color="#00FFCC"
							size="3x"
							fixedWidth
						/>
						<GenericH2 none lessSize>
							Project Management
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						We all know that great work is achieved with a great
						team. At Skynet, we have gathered an outstanding team of
						experts that work together to bring your dreams to life.
					</GenericPara>
				</div>
				<div
					className="item2"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<div className="flex__section4">
						<FontAwesomeIcon
							icon={faCode}
							color="#00FFCC"
							size="3x"
							fixedWidth
						/>
						<GenericH2 none lessSize>
							Design Build
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						We implement the Design/Build approach toward projects
						because it makes a sizable impact on your budget and
						your timeline. Our proven methodology combines the
						services of architects, engineers, and construction
						managers
					</GenericPara>
				</div>
				<div
					className="item3"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<div className="flex__section4">
						<FontAwesomeIcon
							icon={faJs}
							color="#00FFCC"
							size="3x"
							fixedWidth
						/>
						<GenericH2 none lessSize>
							Take Off
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Once the blueprints are drafted and adopted, the
						take-off begins. Our highly experienced team will
						determine the volume and quality of materials required
						to realize your project. This is a crucial step in the
						process that supports the precision of the estimate.
					</GenericPara>
				</div>
				<div
					className="item4"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<div className="flex__section4">
						<FontAwesomeIcon
							icon={faGem}
							color="#00FFCC"
							size="3x"
							fixedWidth
						/>
						<GenericH2 none lessSize>
							Estimate
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Your estimate will go through a detailed cost analysis
						to determine all the materials, manpower, and time
						required. You will be involved through every step, as we
						collectively decide, what will work best for your
						project.
					</GenericPara>
				</div>
			</div>
		</SectionFour>
		<SectionFive>
			<div className="title__section5">Our Recent Works</div>
			<FlexBoxIndex>
				<div className="image">
					<img src={bolt} alt="Logo" width="50" />
					{/* <img
						src="https://source.unsplash.com/LXI5kqCdEcE/600x480"
						alt="Picture 1"
					/> */}
				</div>
				<div className="text_section3">
					<GenericH2 none>BOLT + TIE Apartments</GenericH2>
					<GenericPara lessSize lessSpacing>
						This streamlined strategy allows the various
						stakeholders in a project from the owner, the architect,
						the engineer and the estimator to communicate
						effectively and eliminate issues between the design part
						of the build to the takeoff and estimating part of the
						build dealing with manufacturers specifications and
						suppliers.
					</GenericPara>
					<MoreButton>View Details</MoreButton>
				</div>
			</FlexBoxIndex>
			<FlexBoxIndex inverse>
				<div className="text_section3">
					<GenericH2 none>SPRINGHURST Flats</GenericH2>
					<GenericPara lessSize lessSpacing>
						This streamlined strategy allows the various
						stakeholders in a project from the owner, the architect,
						the engineer and the estimator to communicate
						effectively and eliminate issues between the design part
						of the build to the takeoff and estimating part of the
						build dealing with manufacturers specifications and
						suppliers.
					</GenericPara>
					<MoreButton>View Details</MoreButton>
				</div>
				<div className="image">
					<img src={springhurst} alt="Logo" width="50" />
					{/* <img
						src="https://source.unsplash.com/f77Bh3inUpE/600x480"
						alt="pic2"
					/> */}
				</div>
			</FlexBoxIndex>
		</SectionFive>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
