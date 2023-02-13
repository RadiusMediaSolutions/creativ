import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GenericH2, PostPara } from "../../styles/IndexStyles"

import Banner from "../../components/banner"
import Layout from "../../components/layout"
import React from "react"
// import Seo from "../../components/seo"
import { graphql } from "gatsby"
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
`
const BlogPost = ({ data, children }) => {
	const image = getImage(data.mdx.frontmatter.featured_image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div
				style={{ position: "relative", top: "20%" }}
				className="mdxBanner"
			>
				<Banner
					inner
					h2Content={data.mdx.frontmatter.title}
					className="dNone"
				>
					<GatsbyImage
						image={image}
						alt={data.mdx.frontmatter.featured_image_alt}
						style={{
							height: `70vh`,
							width: `100%`,
							overflow: `hidden`,
						}}
					/>
				</Banner>
			</div>
			<BlogPosts className="mdxContent">
				<section>
					<GenericH2 none>{data.mdx.frontmatter.title}</GenericH2>
					<PostPara>{data.mdx.frontmatter.date}</PostPara>
					{children}
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
			}
		}
	}
`

// export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
