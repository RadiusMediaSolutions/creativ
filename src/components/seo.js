import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, children, keywords }) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
	} = useSiteMetadata()

	const Seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
		keywords: keywords,
	}

	return (
		<>
			<title>{Seo.title}</title>
			<meta name="description" content={Seo.description} />
			<meta name="image" content={Seo.image} />
			<meta keywords="keywords" content={Seo.keywords} />
			<link
				rel="shortcut icon"
				href="../images/develop_logo.png"
				type="image/x-icon"
			/>

			{children}
		</>
	)
}
