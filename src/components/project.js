import Client from "./clients/Client"
import React from "react"
import springhurst from "../images/flats-at-springhurst.jpg"

const Project = ({ project }) => {
	return (
		<div class="card">
			<img src={springhurst} alt="Logo" />
			{/* <img
				class="card__img"
				src="https://source.unsplash.com/random/600x480"
				alt=""
			/> */}
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
