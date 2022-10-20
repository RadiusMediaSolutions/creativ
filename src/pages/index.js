import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faGem, fas, faCode } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJs, faReact, faCss3, faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import * as styles from "../components/index.module.css"
import {
	SectionTwo,
	SectionThree,
	FlexBoxIndex,
	GenericPara,
	GenericH2,
	SectionFour
} from "../styles/IndexStyles"
import Companies from "../components/companies"

const IndexPage = () => (
	<Layout>
		<div style={{position: 'relative'}}>
			<Banner parallax></Banner>
		</div>
		<SectionTwo>
			<div>
				<GenericH2>Our Passion</GenericH2>
				<GenericPara lessSize grey>
					Most good programmers program because they love doing what they do
				</GenericPara>
				<h5>Some dude</h5>
				<span>
					<FontAwesomeIcon icon="gem" color="#04F5C6" size="6x"
						style={{marginRight: '3rem'}}
						fixedWidth
						border />
					<FontAwesomeIcon icon="heart" color="#04F5C6" size="6x"
						style={{marginRight: '3rem'}}
						fixedWidth
						border />
					<FontAwesomeIcon icon="faGem" color="#04F5C6" size="6x"
						style={{marginRight: '3rem'}}
						fixedWidth
						border />

				</span>
			</div>
		</SectionTwo>
		{/* <SectionThree>
			<FlexBoxIndex>
				<div className="image">
					<img src="https://source.unsplash.com/LXI5kqCdEcE/600x480" alt="Picture 1" />
				</div>
				<div className="text_section3">
					<GenericH2 none>Website Development</GenericH2>
					<GenericPara lessSize lessSpacing>
						Hand code beautiful websites using HTML3, CSS3, JS, because they are great
					</GenericPara>
				</div>
			</FlexBoxIndex>
			<FlexBoxIndex inverse>
				<div className="text_section3">
					<GenericH2 none>Website Design</GenericH2>
					<GenericPara lessSize lessSpacing>
						Talented and Experienced Web Designers who can design and craft beautiful websites
					</GenericPara>
				</div>
				<div className="image">
					<img src="https://source.unsplash.com/zP7X_B86xOg/600x480" alt="pic2" />
				</div>
			</FlexBoxIndex>
			<FlexBoxIndex>
				<div className="image">
					<img src="https://source.unsplash.com/jXd2FSvcRr8/600x400" alt="Picture 1" />
				</div>
				<div className="text_section3">
					<GenericH2 none>Website Development</GenericH2>
					<GenericPara lessSize lessSpacing>
						Hand code beautiful websites using HTML3, CSS3, JS, because they are great
					</GenericPara>
				</div>
			</FlexBoxIndex>
		</SectionThree> */}
		<Companies></Companies>
		<SectionFour>
			<div className="header__section4">
				<div className="title__section4">Our Technologies</div>
				<GenericPara lessSize grey>
					We use modern and latest technologies which help our clients<br/> as they are high scalable and maintainable
				</GenericPara>
			</div>
			<div className="grid__section4">
				<div className="item1" style={{ backgroundColor: "#4D408E"}}>
					<div className="flex__section4">
						<FontAwesomeIcon icon={faReact} color="#00FFCC" size="3x" fixedWidth />
						<GenericH2 none lessSize>React</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application extremely fast and handy for every user
					</GenericPara>
				</div>
				<div className="item2" style={{ backgroundColor: "#4D408E"}}>
					<div className="flex__section4">
						<FontAwesomeIcon icon={faCode} color="#00FFCC" size="3x" fixedWidth />
						<GenericH2 none lessSize>React Native</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application extremely fast and handy for every user
					</GenericPara>
				</div>
				<div className="item3" style={{ backgroundColor: "#4D408E"}}>
					<div className="flex__section4">
						<FontAwesomeIcon icon={faJs} color="#00FFCC" size="3x" fixedWidth />
						<GenericH2 none lessSize>Javascript</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application extremely fast and handy for every user
					</GenericPara>
				</div>
				<div className="item4" style={{ backgroundColor: "#4D408E"}}>
					<div className="flex__section4">
						<FontAwesomeIcon icon={faGem} color="#00FFCC" size="3x" fixedWidth />
						<GenericH2 none lessSize>HTML5</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application extremely fast and handy for every user
					</GenericPara>
				</div>
				<div className="item5" style={{ backgroundColor: "#4D408E"}}>
					<div className="flex__section4">
						<FontAwesomeIcon icon={faCss3} color="#00FFCC" size="3x" fixedWidth />
						<GenericH2 none lessSize>CSS3</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application extremely fast and handy for every user
					</GenericPara>
				</div>
				<div className="item6" style={{ backgroundColor: "#4D408E"}}>
					<div className="flex__section4">
						<FontAwesomeIcon icon={faGalacticSenate} color="#00FFCC" size="3x" fixedWidth />
						<GenericH2 none lessSize>Gatsby</GenericH2>
					</div>
					<GenericPara lessSize lessSpacing grey>
						Modern JS framework which will make your web application extremely fast and handy for every user
					</GenericPara>
				</div>
			</div>
		</SectionFour>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
