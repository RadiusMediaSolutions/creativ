import * as React from "react"

import { FlexBoxIndex, GenericPara, SectionTwo } from "../styles/IndexStyles"

import Banner from "../components/banner"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/project-management_Banner.jpg"
import project from "../images/project-management.jpg"

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
						PROJECT <span>MANAGEMENT</span>
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
					{/* <GenericH2 none>WELCOME SKY DEVELOP</GenericH2> */}
					<GenericPara lessSize lessSpacing style={{ margin: "0" }}>
						We all know that great work is achieved with a great
						team. At Skynet, we have gathered an outstanding team of
						experts that work together to bring your dreams to life.
						From architects, engineers, project managers, all the
						way to the builders, we pull together as a unified group
						towards your goals, whether it’s the design of a new
						building, a renovation, or a remodel of existing spaces.
					</GenericPara>
					<GenericPara lessSize lessSpacing style={{ margin: "0" }}>
						We manage your project with the long term in mind and
						how it will provide value for your future. We include
						Post Construction Services to ensure that your
						investment is maintained properly for years to come. We
						will assess the needs based on the materials used for
						your build and the climate that surrounds it. Annual
						spray treatments on exterior surfaces of new roofs,
						decks, and windows will give you long-lasting results
						that you can be proud of.
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
