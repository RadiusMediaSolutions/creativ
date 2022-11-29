import * as styles from "../../components/client.module.css"

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import React from "react"

const Client = ({ client }) => {
	const { clientName, slug, images } = client
	const image = getImage(client.images[0])
	console.log(client.images[0])
	return (
		<article className={styles.place}>
			{/* <div className={styles.imgContainer}></div> */}
			<GatsbyImage image={image} alt="single Client" />

			<div className={styles.footer}>
				<h3>{clientName}</h3>
			</div>
			<Link className={styles.link} to={`/portfolio/${slug}`}>
				View Details
			</Link>
			{/* <StaticImage src="../../images/canvas-bg.jpg" /> */}
		</article>
	)
}
export default Client
