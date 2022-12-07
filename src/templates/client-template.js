import * as styles from "../styles/template.module.css"

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

import Banner from "../components/banner"
import Layout from "../components/layout"
import React from "react"
import background from "../images/roofingblog.jpg"

const Template = ({ data }) => {
	console.log(data)
	console.log("testtt")
	const { clientName, description, images } = data.client
	const image = getImage(data.client.images[0])

	return (
		<Layout>
			<div style={{ position: "relative" }}>
				<Banner
					bgImage={background}
					inner
					h2Content="SKY"
					spanContent="ClIENTS"
				>
					<StaticImage
						src="../images/roofingblog.jpg"
						alt="landscape"
						style={{ height: `80vh`, width: `100%` }}
						aspectRatio={2 / 1}
					/>
				</Banner>
			</div>
			<div className={styles.singleClient}>
				<GatsbyImage image={image} alt="single Client" />
				<h2>{clientName}</h2>
				<p>{description}</p>
			</div>

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
		}
	}
`
export default Template
