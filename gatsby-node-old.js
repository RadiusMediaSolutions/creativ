const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const { data } = await graphql(`
		query {
			clients: allContentfulRecentProjects {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)
	data.clients.edges.forEach(({ node }) => {
		createPage({
			path: `portfolio/${node.slug}`,
			component: path.resolve("./src/templates/client-template.js"),
			context: {
				slug: node.slug,
			},
		})
	})
}

// for pagination
exports.createPages = async ({ graphql, actions, collection }) => {
	const blogPage = path.resolve("./src/pages/blog.js")
	const { data } = await graphql(`
		 {
			allMdx(filter: { fields: { collection:{eq:"${collection}"}} }) {
				totalCount
			}
		}
	`)

	const { totalCount } = data.allMdx
	const pages = Math.ceil(totalCount / 6)

	Array.from({ length: pages }).forEach((_, i) => {
		actions.createPage({
			path: i === 0 ? `/` : `/${i + 1}`,
			component: blogPage,
			context: {
				limit: 6,
				skip: i * 6,
				pages,
				currentPage: i + 1,
			},
		})
	})
}

// 	createPage({
// 		path: "/using-dsg",
// 		component: require.resolve("./src/templates/using-dsg.js"),
// 		context: {},
// 		defer: true,
// 	})
// }
