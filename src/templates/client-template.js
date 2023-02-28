import * as styles from "../styles/template.module.css"

import { ClientTemplate, FlexBoxIndex } from "../styles/IndexStyles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

import Banner from "../components/banner"
import Layout from "../components/layout"
import React from "react"

// import background from "../images/roofingblog.jpg"

const Template = ({ data }) => {
	const { clientName, description, projectDetails } = data.client
	const image = getImage(data.client.images[0])

	return (
		<Layout>
			<div style={{ position: "relative" }} className="portfolioTitle">
				<Banner
					className="portfolioTitle"
					inner
					h2Content="SKYNET"
					spanContent={clientName}
					h1Content=""
				>
					<GatsbyImage
						image={image}
						alt="single Client"
						style={{ height: `80vh`, width: `100%` }}
						aspectRatio={2 / 1}
					/>
				</Banner>
			</div>
			<ClientTemplate>
				<FlexBoxIndex className="mColumn">
					<div className="text_Section3">
						<div className="innerTitle">
							<h2>
								<span>{clientName}</span>
							</h2>
						</div>
						<p>{description}</p>
						<p>{projectDetails.projectDetails}</p>
					</div>
					<div className="header__section4">
						<GatsbyImage image={image} alt="single Client" />
					</div>
				</FlexBoxIndex>
			</ClientTemplate>
			<Link className={styles.backLink} to={`/portfolio/`}>
				&#10094; Back to Portfolio
			</Link>
		</Layout>
	)
}
export const query = graphql`
	query ($slug: String) {
		client: contentfulRecentProjects(slug: { eq: $slug }) {
			clientName
			slug
			description
			images {
				gatsbyImageData(height: 500, formats: [AUTO, WEBP, AVIF])
			}
			projectDetails {
				projectDetails
			}
		}
	}
`
export default Template
