import React from "react"
import ClientList from "../../components/clients/ClientList"
import { useStaticQuery, graphql } from "gatsby"
const getClients = graphql`
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
const Clients = () => {
	const { clients } = useStaticQuery(getPlaces)
	return <ClientList Clients={clients} />
}
export default Clients
