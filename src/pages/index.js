import * as React from "react"
import * as styles from "../components/index.module.css"
import background from "../images/road.jpeg"

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
import { library } from "@fortawesome/fontawesome-svg-core"
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
			<Banner bgImage={background} h2Content="SKY" spanContent="Develop"></Banner>
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
					<GenericH2 none>Website Development</GenericH2>
					<GenericPara lessSize lessSpacing>
						Hand code beautiful websites using HTML3, CSS3, JS,
						because they are great
					</GenericPara>
					<GenericPara lessSize lessSpacing>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
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
							React
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application
						extremely fast and handy for every user
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
							React Native
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application
						extremely fast and handy for every user
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
							Javascript
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application
						extremely fast and handy for every user
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
							HTML5
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application
						extremely fast and handy for every user
					</GenericPara>
				</div>
				<div
					className="item5"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<div className="flex__section4">
						<FontAwesomeIcon
							icon={faCss3}
							color="#00FFCC"
							size="3x"
							fixedWidth
						/>
						<GenericH2 none lessSize>
							CSS3
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application
						extremely fast and handy for every user
					</GenericPara>
				</div>
				<div
					className="item6"
					style={{
						color: "#000",
						backgroundColor: "#fff",
						boxShadow: "0 0 7px #ddd",
					}}
				>
					<div className="flex__section4">
						<FontAwesomeIcon
							icon={faGalacticSenate}
							color="#00FFCC"
							size="3x"
							fixedWidth
						/>
						<GenericH2 none lessSize>
							Gatsby
						</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application
						extremely fast and handy for every user
					</GenericPara>
				</div>
			</div>
		</SectionFour>
		<SectionFive>
			<div className="title__section5">Our Recent Works</div>
			<FlexBoxIndex>
				<div className="image">
					<img
						src="https://source.unsplash.com/LXI5kqCdEcE/600x480"
						alt="Picture 1"
					/>
				</div>
				<div className="text_section3">
					<GenericH2 none>Website Development</GenericH2>
					<GenericPara lessSize lessSpacing>
						Hand code beautiful websites using HTML3, CSS3, JS,
						because they are great
					</GenericPara>
					<MoreButton>View Details</MoreButton>
				</div>
			</FlexBoxIndex>
			<FlexBoxIndex inverse>
				<div className="text_section3">
					<GenericH2 none>Website Design</GenericH2>
					<GenericPara lessSize lessSpacing>
						Talented and Experienced Web Designers who can design
						and craft beautiful websites
					</GenericPara>
					<MoreButton>View Details</MoreButton>
				</div>
				<div className="image">
					<img
						src="https://source.unsplash.com/f77Bh3inUpE/600x480"
						alt="pic2"
					/>
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
