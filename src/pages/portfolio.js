import { GenericH2, Works } from "../styles/IndexStyles"

import Banner from "../components/banner"
import Layout from "../components/layout"
import Project from "../components/project"
import React from "react"
import background from "../images/portfolio.jpg"

const projects = [
	{ title: "FLATS AT SPRINGHURST", link: "/clients" },
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

const Portfolio = () => {
	return (
		<Layout>
			<div style={{ position: "relative" }}>
				<Banner
					bgImage={background}
					inner
					h2Content="SKY"
					spanContent="Project"
				></Banner>
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
}
export default Portfolio
