import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
const PaginateStyles = styled.div`
	display: flex;
	justify-content: end;
	// grid-template-columns: auto 1fr auto;
	text-align: center;
	margin-bottom: 2rem;
	padding: 1rem;
	a[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}
	p {
		margin: 0 20px;
	}
`
const Pagination = ({ pageInfo }) => {
	console.log(pageInfo)
	const totalPages = Math.ceil(pageInfo.totalCount / 6)
	const nextPage = pageInfo.currentPage + 1
	const prevPage = pageInfo.currentPage - 1
	return (
		<PaginateStyles>
			<Link
				disabled={prevPage <= 0 ? "true" : null}
				to={`/blog/${prevPage}`}
			>
				← Prev
			</Link>
			<p>
				You are on page {pageInfo.currentPage} of {totalPages}
			</p>
			<Link
				disabled={nextPage > totalPages ? "true" : null}
				to={`/blog/${nextPage}`}
			>
				Next →
			</Link>
		</PaginateStyles>
	)
}

export default Pagination
