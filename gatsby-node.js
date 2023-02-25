const path = require("path")
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const clientTemplate = path.resolve("src/templates/client-template.js")
	const blogTemplate = path.resolve("./src/pages/blog.js")
	// Individual doc and blog pages
	// All in one go
	return graphql(`
		{
			clients: allContentfulRecentProjects {
				edges {
					node {
						slug
					}
				}
			}
			blog: allMdx(
				sort: { frontmatter: { date: DESC } }
				limit: 6
				skip: 0
			) {
				totalCount
				nodes {
					frontmatter {
						date(formatString: "MMMM D, YYYY")
						featured_image {
							childrenImageSharp {
								gatsbyImageData
							}
						}
						title
						slug
					}
					id
					excerpt
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors)
		}
		// Create doc pages
		result.data.clients.edges.forEach(({ node }) => {
			createPage({
				path: `portfolio/${node.slug}`,
				component: clientTemplate,
				context: {
					slug: node.slug,
				},
			})
		})
		// Create blog pages
		console.log(result.data.nodes)
		i = 0
		result.data.blog.nodes.forEach(({ node }) => {
			createPage({
				path: i === 0 ? `/` : `/${i + 1}`,
				component: blogTemplate,
				context: {
					limit: 6,
					skip: i * 6,
					currentPage: i + 1,
				},
			})
		})
	})
}
