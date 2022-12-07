import * as styles from "../../components/client.module.css"

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import React from "react"
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
const Client = ({ client }) => {
	const { clientName, slug, images } = client
	const image = getImage(client.images[0])
	return (
		// <article className={styles.place}>
		// 	{/* <div className={styles.imgContainer}></div> */}
		// 	<GatsbyImage image={image} alt="single Client" />

		// 	<div className={styles.footer}>
		// 		<h3>{clientName}</h3>
		// 	</div>
		// 	<Link className={styles.link} to={`/portfolio/${slug}`}>
		// 		View Details
		// 	</Link>
		// </article>

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
