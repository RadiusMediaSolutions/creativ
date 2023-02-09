import * as React from "react"

import { FlexBoxIndex, GenericPara, ServiceList } from "../styles/IndexStyles"

import Banner from "../components/banner"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/project-management_Banner.jpg"
import bolttie from "../images/bolttie.jpeg"

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

		<ServiceList>
			<FlexBoxIndex>
				<div className="text_Section3">
					<div className="innerTitle">
						<h2>
							DESIGN <span>BUILD</span>
						</h2>
					</div>

					<GenericPara lessSize lessSpacing style={{ margin: "0" }}>
						We implement the Design/Build approach toward projects
						because it makes a sizable impact on your budget and
						your timeline. Our proven methodology combines the
						services of architects, engineers, and construction
						managers as one unified team. This streamlines the
						entire process and gives you more control over your
						project.
					</GenericPara>
					<h3>ADVANTAGES OF THE SKYNET DESIGN/BUILD APPROACH</h3>
					<h4>1. Modernized dependability</h4>
					<p>
						The Skynet team is the focal point of engagement for
						your project. We are your direct connection to all of
						the operations for your build.
					</p>
					<h4>2. Quality workmanship</h4>
					<p>
						We offer a network of talented architects, engineers,
						and project managers that have delivered excellent
						craftsmanship time after time.
					</p>
					<h4>3. Monetary advantages</h4>
					<p>
						Pricing set during the design stage enables clients to
						have foresight as the project advances and expanded
						power over possible revisions.
					</p>
					<h4>4. Streamlined completion</h4>
					<p>
						The design-build method provides a 33% faster finish
						than the design-spec-bid-build manner.
					</p>
					<h4>5. Decreased risk</h4>
					<p>
						Collaboration in the initial stages lessens project
						uncertainties connected with expense and agenda.
					</p>
					<h3>
						HOW SKYNETPS APPROACH
						<span> DESIGN/BUILD PROJECTS</span>
					</h3>
					<p>
						We have established solid relationships with experienced
						architectural firms that specialize in all types of
						design styles, including modern, eclectic, ornate, and
						functional. We will gather an experienced team that is
						completely suited to your vision.
					</p>
					<p>
						When you take advantage of our Design-Build services,
						you can relax knowing that your project is handled in
						one, all-inclusive contract. This turn-key solution
						covers all aspects of design and construction
						management, without sacrificing quality.
					</p>
				</div>
			</FlexBoxIndex>
			<FlexBoxIndex className="mColumn">
				<div className="text_Section3">
					<div className="innerTitle">
						<h2>
							OUR <span>DESIGN-BUILD PROJECTS</span>
						</h2>
					</div>
					<p>
						Our Design/Build projects have achieved many successes.
						Having input right from the start allows us to fully
						manage your project, ensuring that it stays on schedule
						and doesn’t exceed your budget. Please, have a look at
						some of the Design/Build projects that we have created
						in the Tri-State region.
					</p>
				</div>
				<div className="header__section4">
					<img
						src={bolttie}
						alt="Bolt Tie Building"
						className="teamImg"
					/>
				</div>
			</FlexBoxIndex>
		</ServiceList>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default Services
