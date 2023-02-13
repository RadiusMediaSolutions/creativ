import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, children }) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
	} = useSiteMetadata()

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
	}

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<link
				rel="shortcut icon"
				href="../images/develop_logo.png"
				type="image/x-icon"
			/>

			{children}
		</>
	)
}
