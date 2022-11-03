import { GenericH2, Works } from "../styles/IndexStyles"

import InnerBanner from "../components/banner"
import Layout from "../components/layout"
import Project from "../components/project"
import Projectbackground from "../images/portfolio.jpg"
import React from "react"

const projects = [
	{ title: "Project A", link: "https://www.google.com" },
	{ title: "Project B", link: "https://www.google.com" },
	{ title: "Project C", link: "https://www.google.com" },
	{ title: "Project D", link: "https://www.google.com" },
	{ title: "Project E", link: "https://www.google.com" },
	{ title: "Project F", link: "https://www.google.com" },
	{ title: "Project G", link: "https://www.google.com" },
	{ title: "Project H", link: "https://www.google.com" },
	{ title: "Project I", link: "https://www.google.com" },
	{ title: "Project J", link: "https://www.google.com" },
	{ title: "Project K", link: "https://www.google.com" },
]

export default () => (
	<Layout>
		<div style={{ position: "relative" }}>
			<InnerBanner project={{ Projectbackground }}></InnerBanner>
		</div>
		<Works>
			<section class="gallery__flex">
				{projects &&
					projects.map(proj => (
						<Project key={proj.title} project={proj} />
					))}
			</section>
		</Works>
	</Layout>
)
