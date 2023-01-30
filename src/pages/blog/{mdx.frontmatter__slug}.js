import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GenericH2, PostPara } from "../../styles/IndexStyles"

import Banner from "../../components/banner"
import Layout from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

const BlogPosts = styled.div`
	margin: 4rem 0;
	padding: 0 1.5rem;
	h2 {
		margin-bottom: 0;
	}
`
const BlogPost = ({ data, children }) => {
	const image = getImage(data.mdx.frontmatter.featured_image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div style={{ position: "relative" }}>
				<Banner inner>
					<GatsbyImage
						image={image}
						alt={data.mdx.frontmatter.featured_image_alt}
					/>
				</Banner>
			</div>
			<BlogPosts>
				<GenericH2 none>{data.mdx.frontmatter.title}</GenericH2>
				<PostPara>{data.mdx.frontmatter.date}</PostPara>
				{children}
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
						gatsbyImageData(width: 1600, height: 656)
					}
				}
			}
		}
	}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
