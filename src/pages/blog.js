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
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/roofingblog.jpg"
import styled from "styled-components"

const BlogList = styled.div`
	h2 {
		margin: 3rem 0;
		font-size: 2rem;
	}
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
					spanContent="Resources"
				>
					<StaticImage
						className="image"
						src="../images/roofingblog.jpg"
						alt="landscape"
						style={{ height: `70vh`, width: `100%` }}
						aspectRatio={2 / 1}
					/>
				</Banner>
			</div>

			<BlogList className="innerTitle">
				<h2>
					<span>SKYNET</span> RECENT ARTICLES
				</h2>
				<div className="blogGrid">
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
				</div>
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
