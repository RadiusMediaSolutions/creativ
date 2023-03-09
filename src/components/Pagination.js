import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
const PaginateStyles = styled.div`
	display: flex;
	justify-content: center;
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
	span {
		background-color: var(--heading-color);
		color: white;
		padding: 2px 7px;
		margin: 0 5px;
	}
`
const Pagination = ({ pageInfo }) => {
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
				You are on page <span>{pageInfo.currentPage}</span> of{" "}
				{totalPages}
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
