import React from "react"
import styled from "styled-components"
const PullQuote = styled.div`
	.pquote {
		float: right;
		width: 300px;
		padding: 15px;
		margin: 0 13px 13px 0;
		color: var(--heading-color);
		background: white;
		box-shadow: 3px 0 5px 5px #ddd;
		border-radius: 20px 0 20px 0;
	}

	blockquote {
		margin: 0; /* gets rid of the default blockquote margin */
	}

	.pquote p:first-letter {
		font-size: 2.5rem;
	}
`

const MessageComponent = () => (
	<PullQuote>
		<aside className="pquote">
			<blockquote>
				<p>
					Trust Skynet Professional Solutions to bring your vision to
					life.
				</p>
			</blockquote>
		</aside>
	</PullQuote>
)

export default MessageComponent
