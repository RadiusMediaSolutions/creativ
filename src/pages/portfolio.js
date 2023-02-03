import Banner from "../components/banner"
import Clients from "../components/clients/Clients"
import Layout from "../components/layout"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/porfolio_bg.jpg"

const Portfolio = () => {
	return (
		<Layout>
			<div style={{ position: "relative" }}>
				<Banner
					bgImage={background}
					inner
					h2Content="SKYNET"
					spanContent="Portfolio"
				>
					<StaticImage
						src="../images/porfolio_bg.jpg"
						alt="landscape"
						style={{ height: `70vh`, width: `100%` }}
						aspectRatio={2 / 1}
					/>
				</Banner>
			</div>
			<Clients />
			{/* <Works>

				<section class="gallery__flex">
					{projects &&
						projects.map(proj => (
							<Project key={proj.title} project={proj} />
						))}
				</section>
			</Works> */}
		</Layout>
	)
}
export default Portfolio
