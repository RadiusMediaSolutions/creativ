import Banner from "../components/banner"
import Clients from "../components/clients/Clients"
import Layout from "../components/layout"
import React from "react"
import { Seo } from "../components/seo"
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
					h1Content=""
				>
					<StaticImage
						src="../images/porfolio_bg.jpg"
						alt="landscape"
						style={{ height: `80vh`, width: `100%` }}
						aspectRatio={2 / 1}
					/>
				</Banner>
			</div>
			<Clients />
		</Layout>
	)
}

export const Head = () => (
	<Seo title="SkyNet Portfolio" content={Seo.description} />
)
export default Portfolio
