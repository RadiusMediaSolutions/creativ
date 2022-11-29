import * as styles from "../../components/items.module.css"

import { graphql, useStaticQuery } from "gatsby"

import Client from "../../components/clients/Client"
import { GenericH2 } from "../../styles/IndexStyles.js"
import { Link } from "gatsby"
import React from "react"
import Title from "../Title"

const getFeaturedClients = graphql`
	query {
		clients: allContentfulRecentProjects(
			filter: { featured: { eq: true } }
		) {
			edges {
				node {
					contentful_id
					clientName
					slug
					featured
					images {
						gatsbyImageData(
							height: 500
							formats: [AUTO, WEBP, AVIF]
						)
					}
					description
				}
			}
		}
	}
`

const FeaturedClients = () => {
	const response = useStaticQuery(getFeaturedClients)
	const clients = response.clients.edges
	console.log(response)
	return (
		<section className={styles.clients}>
			<h2>
				Our Featured <span>Works</span>
			</h2>
			{/* <Title title="featured" subtitle="portfolio" /> */}

			<div className={styles.center}>
				{clients.map(({ node }) => {
					return <Client key={node.contentful_id} client={node} />
				})}
			</div>
		</section>
	)
}
export default FeaturedClients
