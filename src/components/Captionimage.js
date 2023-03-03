import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
const FigCaption = styled.div`
	padding: 15px;
	color: white;
	background: var(--heading-color);
	box-shadow: 3px 0 5px 5px #ddd;
	border-radius: 20px 0 20px 0;
`
const CaptionedImage = ({ image }) => {
	const img = getImage(image)
	return <GatsbyImage className="mdxImage" image={img} />
}

export default CaptionedImage
