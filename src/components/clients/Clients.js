import { graphql, useStaticQuery } from "gatsby"

import ClientList from "../../components/clients/ClientList"
import React from "react"

const getClients = graphql`
	query {
		clients: allContentfulRecentProjects {
			edges {
				node {
					contentful_id
					clientName
					slug
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
	const { clients } = useStaticQuery(getClients)
	console.log(clients)
	return <ClientList Clients={clients} />
}
export default Clients
