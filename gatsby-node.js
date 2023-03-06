const path = require("path")
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const clientTemplate = path.resolve("src/templates/client-template.js")
	const blogTemplate = path.resolve("src/pages/blog.js")
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
			blog: allMdx(sort: { frontmatter: { date: DESC } }, limit: 100) {
				pageInfo {
					currentPage
					totalCount
				}
				nodes {
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
		const blogs = result.data.blog.nodes
		const postsPerPage = 6
		const numPages = Math.ceil(blogs.length / postsPerPage)

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog/1` : `/blog/${i + 1}`,
				// path: `/blog/${i + 1}`,
				component: blogTemplate,
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					currentPage: i + 1,
					numPages,
				},
			})
		})
	})
}
exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}
