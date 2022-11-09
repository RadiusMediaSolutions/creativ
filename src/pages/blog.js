import {
	Clients,
	GenericH2,
	GenericH3,
	GenericPara,
} from "../styles/IndexStyles"
import { Link, graphql } from "gatsby"

import Banner from "../components/banner"
import Layout from "../components/layout"
import React from "react"
import background from "../images/roofingblog.jpg"
import styled from "styled-components"

const BlogList = styled.div`
	display: grid;
	// grid-template-columns: 1fr 1fr 1fr;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	grid-gap: 20px;
	margin: 4rem 0;

	article {
		padding: 2rem;
		background: #e9e7e7;
	}
	p {
		margin-bottom: var(--space-3);
	}
	a {
		color: #9b9b01;
	}
`
const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<div style={{ position: "relative" }}>
				<Banner
					bgImage={background}
					inner
					h2Content="SKY"
					spanContent="ArticleS"
				></Banner>
			</div>
			<BlogList>
				{data.allMdx.nodes.map(node => (
					<article key={node.id}>
						<GenericH3 none>
							<Link to={`/blog/${node.frontmatter.slug}`}>
								{node.frontmatter.title}
							</Link>
						</GenericH3>
						<span>
							<b>Posted:</b> {node.frontmatter.date}
						</span>
						<p>{node.excerpt}</p>
					</article>
				))}
			</BlogList>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
					slug
				}
				id
				excerpt
			}
		}
	}
`

export default BlogPage
