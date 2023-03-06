import * as styles from "../../styles/items.module.css"

import { graphql, useStaticQuery } from "gatsby"

import Client from "../../components/clients/Client"
import { Link } from "gatsby"
import React from "react"
import Title from "../Title"
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
	margin: 0 auto;
	width: fit-content;
`
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
	return (
		<section className={styles.clients}>
			<h2>
				Our Featured <span>Works</span>
			</h2>

			<div className={styles.center}>
				{clients.map(({ node }) => {
					return <Client key={node.contentful_id} client={node} />
				})}
			</div>
			<MoreButton>
				<Link
					to="/portfolio"
					style={{
						color: "#9b9b01 ",
						fontWeight: "600",
						textDecoration: `none`,
					}}
				>
					View Details
				</Link>
			</MoreButton>
		</section>
	)
}
export default FeaturedClients
