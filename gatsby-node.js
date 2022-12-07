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
// 	createPage({
// 		path: "/using-dsg",
// 		component: require.resolve("./src/templates/using-dsg.js"),
// 		context: {},
// 		defer: true,
// 	})
// }
