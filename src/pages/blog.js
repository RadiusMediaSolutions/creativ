import { Link, graphql } from "gatsby"

import Banner from "../components/banner"
import { GenericH3 } from "../styles/IndexStyles"
import Layout from "../components/layout"
import React from "react"
import { Seo } from "../components/seo"
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
					h2Content="SKYNET"
					spanContent="Resources"
				>
					<StaticImage
						className=""
						src="../images/roofingblog.jpg"
						alt="landscape"
						style={{ height: `80vh`, width: `100%` }}
						aspectRatio={2 / 1}
					/>
				</Banner>
			</div>

			<BlogList className="innerTitle">
				<section>
					<h2>
						RECENT <span> ARTICLES</span>
					</h2>
					<div className="blogGrid">
						{data.allMdx.nodes.map(node => (
							<article key={node.id}>
								<GenericH3 none>
									<Link to={`/blog/${node.frontmatter.slug}`}>
										{node.frontmatter.title}
									</Link>
								</GenericH3>
								<span style={{ marginBottom: `0.5rem` }}>
									<b>Posted:</b> {node.frontmatter.date}
								</span>
								<p>{node.excerpt}</p>
							</article>
						))}
					</div>
				</section>
			</BlogList>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMdx(sort: { frontmatter: { date: DESC } }) {
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
`
export const Head = () => (
	<Seo title="SkyNet Resources" content={Seo.description} />
)
export default BlogPage
