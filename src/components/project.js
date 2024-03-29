import Client from "./clients/Client"
import React from "react"
import springhurst from "../images/flats-at-springhurst.jpg"

const Project = ({ project }) => {
	return (
		<div class="card">
			<img src={springhurst} alt="Logo" />

			<div class="card__overlay">
				<h5 class="card-title">{project.title}</h5>
				<a class="card-link" href={project.link} target="_blank">
					View Details
				</a>
			</div>
		</div>
	)
}

export default Project
