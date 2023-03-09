import * as styles from "../../styles/items.module.css"

import React, { Component } from "react"

import Client from "./Client"

class ClientList extends Component {
	state = {
		clients: [],
		sortedclients: [],
	}
	componentDidMount() {
		this.setState({
			clients: this.props.Clients.edges,
			sortedclients: this.props.Clients.edges,
		})
	}
	render() {
		return (
			<section className="innerTitle imgGrid">
				<h2>
					COMMERCIAL <span>PROJECTS</span>
				</h2>
				<div className={styles.center}>
					{this.state.sortedclients &&
						this.state.sortedclients.map(({ node }) => {
							return (
								<Client
									key={node.contentful_id}
									client={node}
								/>
							)
						})}
				</div>
			</section>
		)
	}
}
export default ClientList
