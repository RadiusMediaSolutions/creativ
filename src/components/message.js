import React from "react"
import styled from "styled-components"
const PullQuote = styled.div`
	.pquote {
		float: left;
		width: 100px;
		background: #ddf;
		font-weight: bold;
		padding: 13px;
		margin: 0 13px 13px 0;
	}

	blockquote {
		margin: 0; /* gets rid of the default blockquote margin */
	}
`

const MessageComponent = () => (
	<PullQuote class="pquote">
		<blockquote>
			<p>
				It is not an exaggeration to say that peas can be described as
				nothing less than perfect spheres of joy.
			</p>
		</blockquote>
	</PullQuote>
)

export default MessageComponent
