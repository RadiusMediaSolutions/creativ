import * as React from "react"

import {
	FlexBoxIndex,
	GenericH2,
	GenericPara,
	SectionFive,
	SectionFour,
	SectionTwo,
} from "../styles/IndexStyles"

import Banner from "../components/banner"
import Companies from "../components/companies"
// import FeaturedClients from "../components/clients/FeaturedClients"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Seo } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import about from "../images/welcome_banner.jpg"
import background from "../images/skynet_heroImg.jpg"
import bolt from "../images/bolttie.jpeg"
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
	/*     letter-spacing: 0.1em; */
	padding: 0.8rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	margin: 30px auto;
	width: fit-content;
`
const IndexPage = () => (
	<Layout>
		<div style={{ position: "relative" }}>
			<Banner
				bgImage={background}
				h2Content="SKYNET"
				spanContent="Develop"
				h3Content="Global Consulting Powerhouse"
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
					data-scroll-speed="1"
				>
					<img src={about} alt="about" style={{ maxWidth: "60%" }} />
				</div>
				<div className="text_section3">
					<h2>
						WELCOME – WE ARE <span>SKYNET</span>
					</h2>
					<div
						className="image small"
						data-scroll
						data-scroll-direction="vertical"
						data-scroll-repeat="true"
						data-scroll-speed="1"
					>
						<img
							src={about}
							alt="about"
							style={{ maxWidth: "70%" }}
						/>
					</div>
					{/* <GenericH2 none>WELCOME SKY DEVELOP</GenericH2> */}
					<div className="contentSection">
						<GenericPara
							lessSize
							lessSpacing
							style={{ margin: "0" }}
						>
							Our proven methodology creates a comprehensive
							strategy combining the services of an architect, an
							engineer and a construction manager as one unified
							package towards your construction goals whether its
							the design of a new building or a renovation or
							remodel of existing space. This streamlined strategy
							allows the various stakeholders in a project from
							the owner, the architect, the engineer and the
							estimator to communicate effectively and eliminate
							issues between the design part of the build to the
							takeoff and estimating part of the build dealing
							with manufacturers specifications and suppliers.
						</GenericPara>
						<h3>Our process</h3>
						<ul className="processList">
							<li>IDEA & START</li>
							<li>DESIGN & CREATE</li>
							<li>BUILD & FINISH</li>
						</ul>
						<MoreButton>Learn More</MoreButton>
					</div>
				</div>
			</FlexBoxIndex>
		</SectionTwo>

		<SectionFour>
			<div
				className="header__section4 op-class"
				data-scroll
				data-scroll-class="fadeIn"
				data-scroll-repeat="true"
				data-scroll-speed="2"
			>
				<div className="title__section4">
					Our <span>Services</span>
				</div>
				<p>
					We use modern and latest technologies which help our clients
					as they are high scalable and maintainable
				</p>
			</div>
			<div className="grid__section4">
				<div
					data-scroll
					data-scroll-speed="1"
					data-scroll-sticky
					className="item1"
					style={{
						color: "#fff",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<Link to="/project-management">
						<div className="flex__section4">
							{/* <FontAwesomeIcon
							icon={faReact}
							color="#00FFCC"
							size="3x"
							fixedWidth
						/> */}
							<GenericH2 none lessSize>
								Project Management
							</GenericH2>
						</div>
						<GenericPara lessSize lessSpacing grey>
							We all know that great work is achieved with a great
							team. At Skynet, we have gathered an outstanding
							team of experts that work together to bring your
							dreams to life.
						</GenericPara>
					</Link>
				</div>
				<div
					data-scroll
					data-scroll-speed="1"
					className="item2"
					style={{
						color: "#fff",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<Link to="/design-build">
						<div className="flex__section4">
							<GenericH2 none lessSize>
								Design Build
							</GenericH2>
						</div>
						<GenericPara lessSize lessSpacing grey>
							We implement the Design/Build approach toward
							projects because it makes a sizable impact on your
							budget and your timeline. Our proven methodology
							combines the services of architects, engineers, and
							construction managers
						</GenericPara>
					</Link>
				</div>
				<div
					data-scroll
					data-scroll-speed="1"
					className="item3"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<Link to="/take-off">
						<div className="flex__section4">
							<GenericH2 none lessSize>
								Take Off
							</GenericH2>
						</div>
						<GenericPara lessSize lessSpacing grey>
							Once the blueprints are drafted and adopted, the
							take-off begins. Our highly experienced team will
							determine the volume and quality of materials
							required to realize your project. This is a crucial
							step in the process that supports the precision of
							the estimate.
						</GenericPara>
					</Link>
				</div>
				<div
					data-scroll
					data-scroll-speed="1"
					data-scroll-sticky
					className="item4"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<Link to="/estimate">
						<div className="flex__section4">
							<GenericH2 none lessSize>
								Estimate
							</GenericH2>
						</div>
						<GenericPara lessSize lessSpacing grey>
							Your estimate will go through a detailed cost
							analysis to determine all the materials, manpower,
							and time required. You will be involved through
							every step, as we collectively decide, what will
							work best for your project.
						</GenericPara>
					</Link>
				</div>
			</div>
		</SectionFour>
		<SectionFive>
			<div
				className="title__section5 op-class"
				data-scroll
				data-scroll-class="fadeIn"
				data-scroll-repeat="true"
				data-scroll-speed="2"
			>
				Our Featured <span>Works</span>
			</div>
			{/* <h2>OUR FEATURED <span>WORKS</span></h2> */}
			<FlexBoxIndex className="mColumn">
				<div className="image">
					<img src={bolt} alt="Logo" width="50" />
				</div>
				<div className="text_section3">
					<GenericH2 none>
						<span>BOLT + TIE</span> <br></br>Apartments
					</GenericH2>
					<GenericPara lessSize lessSpacing>
						This streamlined strategy allows the various
						stakeholders in a project from the owner, the architect,
						the engineer and the estimator to communicate
						effectively and eliminate issues between the design part
						of the build to the takeoff and estimating part of the
						build dealing with manufacturers specifications and
						suppliers.
					</GenericPara>
					<MoreButton>
						<Link
							to="/clients"
							style={{
								color: "#9b9b01 ",
								fontWeight: "600",
								textDecoration: `none`,
								marginTop: "1.5rem",
							}}
						>
							View Details
						</Link>
					</MoreButton>
				</div>
			</FlexBoxIndex>
			<FlexBoxIndex inverse className="mColumn">
				<div className="text_section3" style={{ marginRight: "2rem" }}>
					<GenericH2 none>
						SPRINGHURST <span>Flats</span>
					</GenericH2>
					<div className="image mview">
						<img src={springhurst} alt="Logo" width="50" />
					</div>
					<GenericPara lessSize lessSpacing>
						This streamlined strategy allows the various
						stakeholders in a project from the owner, the architect,
						the engineer and the estimator to communicate
						effectively and eliminate issues between the design part
						of the build to the takeoff and estimating part of the
						build dealing with manufacturers specifications and
						suppliers.
					</GenericPara>
					<MoreButton>
						<Link
							to="/clients"
							style={{
								color: "#9b9b01 ",
								fontWeight: "600",
								textDecoration: `none`,
							}}
						>
							View Details
						</Link>
					</MoreButton>
				</div>
				<div
					className="image lview"
					data-scroll
					data-scroll-direction="vertical"
					data-scroll-speed="2"
				>
					<img src={springhurst} alt="Logo" width="50" />
				</div>
			</FlexBoxIndex>
		</SectionFive>
		<Companies></Companies>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Skynet Professional Solutions" />

export default IndexPage
