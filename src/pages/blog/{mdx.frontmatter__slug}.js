import { GenericH2, GenericH3, PostPara } from "../../styles/IndexStyles"
import { Link, graphql } from "gatsby"

import Banner from "../../components/banner"
import Layout from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"
import background from "../../images/roofingblog.jpg"
import styled from "styled-components"

const BlogPosts = styled.div`
	margin: 4rem 0;
	padding: 0 1.5rem;
	h2 {
		margin-bottom: 0;
	}
`
const BlogPost = ({ data, children }) => {
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div style={{ position: "relative" }}>
				<Banner
					bgImage={background}
					inner
					h2Content=""
					spanContent="POST ONE"
				></Banner>
			</div>
			<BlogPosts>
				<GenericH2 none>{data.mdx.frontmatter.title}</GenericH2>
				<PostPara>{data.mdx.frontmatter.date}</PostPara>
				{children}
				<GenericH3 none>This is Another Post Title</GenericH3>
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
			}
		}
	}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
