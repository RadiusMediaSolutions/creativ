import React from "react"

const Project = ({ project }) => {
	return (
		<div class="card">
			<img
				class="card__img"
				src="https://source.unsplash.com/random/600x480"
				alt=""
			/>
			<div class="card__overlay">
				<h5 class="card-title">{project.title}</h5>
				<a class="card-link" href={project.link} target="_blank">
					Link
				</a>
			</div>
		</div>
	)
}

export default Project
