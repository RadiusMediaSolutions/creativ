import {
	CntForm,
	ContactSection,
	GenericH3,
	GenericPara,
} from "../styles/IndexStyles"
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa"

import Banner from "../components/banner"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/contactus.jpg"

const Contact = () => (
	<Layout>
		<div style={{ position: "relative" }}>
			<Banner
				bgImage={background}
				inner
				spanContent="Contact"
				h1Content=""
			>
				<StaticImage
					src="../images/contactus.jpg"
					alt="landscape"
					style={{ height: `70vh` }}
					aspectRatio={2 / 1}
				/>
			</Banner>
		</div>

		<div className="innerTitle">
			<h2>
				FEEL FREE TO <span>CONTACT US</span>
			</h2>
		</div>
		<ContactSection className="mColumn">
			<div className="box">
				{/* <FaPhoneAlt className="ftr-icon" /> */}
				<GenericH3 none>CALL US</GenericH3>

				<Link
					to="/"
					style={{
						color: "#666666 ",
						fontSize: `var(--font-lg)`,
						textDecoration: `none`,
					}}
				>
					123-456-7890
				</Link>
			</div>
			<div className="box">
				<GenericH3 none>Email Address</GenericH3>
				<Link
					to="/"
					style={{
						color: "#666666 ",
						fontSize: `var(--font-sm)`,
						textDecoration: `none`,
					}}
				>
					skydevelop@mail.com
				</Link>
			</div>
			<div className="box">
				<GenericH3 none>Address</GenericH3>
				<GenericPara lessSize>
					1234 Prather Road, Louisville KY 47172
				</GenericPara>
			</div>
		</ContactSection>
		<CntForm>
			<div className="innerTitle">
				<h2>
					HAVE QUESTIONS? <span>SEND US A MESSAGE</span>
				</h2>
			</div>
			<GenericPara lessSize>
				Please fill out the contact form below so we know what types of
				interest you have!. We want to make sure that our clients are
				well informed about their options before they commit. So please
				take 2 minutes of your day for us by filling out this one simple
				form–we’ll be emailing back within 24 hours with all the info
				you need!
			</GenericPara>
			<form
				className="cntForm"
				method="POST"
				action="https://getform.io/f/aff1bedd-c396-40a6-88f3-4bceadf69fd4"
			>
				{/* Hidden Honeypot input to prevent spams  */}
				<input
					type="hidden"
					name="_gotcha"
					style={{ display: "none !important" }}
				></input>
				<label>
					Name
					<input type="text" name="name" id="name" />
				</label>
				<label>
					Email
					<input type="email" name="email" id="email" />
				</label>
				<label>
					Subject
					<input type="text" name="subject" id="subject" />
				</label>
				<label>
					Message
					<textarea name="message" id="message" rows="5" />
				</label>
				<button type="submit">Send</button>
			</form>
		</CntForm>
	</Layout>
)
export default Contact
