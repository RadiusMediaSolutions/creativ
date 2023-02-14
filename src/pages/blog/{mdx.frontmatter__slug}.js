import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GenericH2, PostPara } from "../../styles/IndexStyles"
import { Link, graphql } from "gatsby"

import Banner from "../../components/banner"
import Layout from "../../components/layout"
import React from "react"
import { Seo } from "../../components/seo"
import styled from "styled-components"

const BlogPosts = styled.div`
	margin: 4rem 0;
	// padding: 0 1.5rem;
	h2 {
		margin-bottom: 0;
	}
	.gatsby-resp-image-wrapper {
		margin: 30px 0;
	}
	.backLink {
		box-shadow: none;
		color: #9b9b01;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
		margin-top: 3rem;
	}
`
const BlogPost = ({ data, children }) => {
	const image = getImage(data.mdx.frontmatter.featured_image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div style={{ position: "relative" }} className="mdxBanner">
				<Banner
					inner
					h2Content={data.mdx.frontmatter.title}
					h3Content={data.mdx.frontmatter.date}
				>
					<GatsbyImage
						image={image}
						alt={data.mdx.frontmatter.featured_image_alt}
						style={{ height: `80vh`, width: `100%` }}
						aspectRatio={2 / 1}
					/>
				</Banner>
			</div>
			<BlogPosts className="mdxContent">
				<section>
					<GenericH2 none>{data.mdx.frontmatter.title}</GenericH2>
					<PostPara>{data.mdx.frontmatter.date}</PostPara>
					{children}

					<Link className="backLink" to={`/blog/`}>
						&#10094; Back to Blog
					</Link>
				</section>
			</BlogPosts>
		</Layout>
	)
}

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
				featured_image_alt
				featured_image {
					childImageSharp {
						gatsbyImageData
					}
				}
				description
				keywords
			}
		}
	}
`

export const Head = ({ data }) => (
	<Seo
		title={data.mdx.frontmatter.title}
		content={data.mdx.frontmatter.description}
		keywords={data.mdx.frontmatter.keywords}
	/>
)

export default BlogPost
