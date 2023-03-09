require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: `Skynet`,
		description: `SkyNet Professional Solutions - We develop your tomorrow `,
		author: `Radius Media Solutions`,
		siteUrl: `https://www.skynetps.com/`,
		keywords: `Roofing, Construction`,
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-theme-ui`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo-small.png`, // This path is relative to the root of the site.
			},
		},

		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 300,
							showCaptions: true,
							markdownCaptions: false,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-41D5RS6CZJ", // Google Analytics / GA
				],
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
				},
			},
		},
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId:
					"google-site-verification=CnC4Jz_M1E_q-SYlkEt1C1j684M8iHoFN6m6v-LPM7o",
				head: true,
			},
		},
	],
}
