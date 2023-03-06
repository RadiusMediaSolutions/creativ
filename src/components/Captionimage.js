import { GatsbyImage, getImage } from "gatsby-plugin-image"

import React from "react"
const CaptionedImage = ({ image }) => {
	const img = getImage(image)
	return <GatsbyImage className="mdxImage" image={img} />
}

export default CaptionedImage
