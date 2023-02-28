import * as ThemeUIComponents from "@theme-ui/components"

import { graphql, useStaticQuery } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const IMAGE_KEY = "image"

const shortcodes = {
	...ThemeUIComponents,
	GatsbyImage,
}

const MdxLayout = ({ children }) => {
	const {
		mdx: {
			body,
			frontmatter: { embeddedImages },
		},
	} = useStaticQuery(graphql`
		query ($id: String) {
			mdx(id: { eq: $id }) {
				id
				body
				frontmatter {
					embeddedImages
				}
			}
		}
	`)
	const embeddedImagesByKey =
		embeddedImages &&
		embeddedImages.reduce((images, image, index) => {
			images[`${IMAGE_KEY}${index + 1}`] = images[
				`${IMAGE_KEY}${index + 1}`
			] || {
				...image.childImageSharp,
			}
			return images
		}, {})

	return (
		<MDXProvider components={shortcodes}>
			<MDXRenderer embeddedImages={embeddedImagesByKey}>
				{children}
			</MDXRenderer>
		</MDXProvider>
	)
}

export default MdxLayout
