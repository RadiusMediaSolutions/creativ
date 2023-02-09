import * as React from "react"

import { FlexBoxIndex, GenericPara, SectionTwo } from "../styles/IndexStyles"

import Banner from "../components/banner"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/project-management_Banner.jpg"
import project from "../images/estimate-small.jpg"
import styled from "styled-components"

const Services = () => (
	<Layout>
		<div style={{ position: "relative" }}>
			<Banner
				style={{ marginTop: "42px" }}
				bgImage={background}
				inner
				h2Content="SKYNET"
				spanContent="SERVICES"
			>
				<StaticImage
					src="../images/project-management_Banner.jpg"
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
					<img
						src={project}
						alt="about"
						style={{ maxWidth: "90%" }}
					/>
				</div>
				<div className="text_section3">
					<h2>
						<span>ESTIMATE</span>
					</h2>
					<div
						className="image small"
						data-scroll
						data-scroll-direction="vertical"
						data-scroll-repeat="true"
						data-scroll-speed="1"
					>
						<img
							src={project}
							alt="about"
							style={{ maxWidth: "90%" }}
						/>
					</div>
					<GenericPara lessSize lessSpacing style={{ margin: "0" }}>
						Your estimate will go through a detailed cost analysis
						to determine all the materials, manpower, and time
						required. You will be involved through every step, as we
						collectively decide, what will work best for your
						project.
					</GenericPara>
				</div>
			</FlexBoxIndex>
		</SectionTwo>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default Services
