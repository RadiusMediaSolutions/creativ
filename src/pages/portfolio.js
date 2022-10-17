import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import { Works, GenericH2 } from "../styles/IndexStyles"

const projects = [
	{title: "Project A", link: "https://www.google.com"},
	{title: "Project B", link: "https://www.google.com"},
	{title: "Project C", link: "https://www.google.com"},
	{title: "Project D", link: "https://www.google.com"},
	{title: "Project E", link: "https://www.google.com"},
	{title: "Project F", link: "https://www.google.com"},
	{title: "Project G", link: "https://www.google.com"},
	{title: "Project H", link: "https://www.google.com"},
	{title: "Project I", link: "https://www.google.com"},
	{title: "Project J", link: "https://www.google.com"},
	{title: "Project K", link: "https://www.google.com"},
]

export default () => (
	<Layout>
		<Works>
			<GenericH2 none dark style={{textAlign: 'center'}}>
				Our Portfolio
			</GenericH2>
			<section class="gallery__flex">
				{ projects && projects.map(proj => <Project key={proj.title} project={proj} />)}
			</section>
		</Works>
	</Layout>
)
