import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import React from "react"

const Client = ({ client }) => {
	const { clientName, slug } = client
	const image = getImage(client.images[0])
	return (
		<div className="card">
			<GatsbyImage image={image} alt="single Client" />
			<div className="card__overlay">
				<h5 className="card-title">{clientName}</h5>

				<Link className="card-link" to={`/portfolio/${slug}`}>
					View Details
				</Link>
			</div>
		</div>
	)
}
export default Client
