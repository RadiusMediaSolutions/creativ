import { Copyright, Ftr, GenericH3, GenericPara } from "../styles/IndexStyles"
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa"

import { Link } from "gatsby"
import React from "react"

const Footer = () => {
	return (
		<>
			<Ftr
				className="ftrNav"
				style={{
					fontSize: `var(--font-sm)`,
				}}
			>
				<div className="ftr1">
					<GenericH3 none>Sky Develop</GenericH3>
					<GenericPara lessSize>
						We use modern and latest technologies which help our
						clients as they are high scalable and maintainable
					</GenericPara>
				</div>
				<div className="ftr2">
					<GenericH3 none>Phone Number</GenericH3>
					<FaPhoneAlt className="ftr-icon" />
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
				<div className="ftr3">
					<GenericH3 none>Email Address</GenericH3>
					<FaRegEnvelope className="ftr-icon" />
					<Link
						to="/"
						style={{
							color: "#666666 ",
							fontSize: `var(--font-lg)`,
							textDecoration: `none`,
						}}
					>
						skydevelop@mail.com
					</Link>
				</div>
				<div className="ftr4">
					<GenericH3 none>Address</GenericH3>

					<GenericPara lessSize>
						<FaMapMarkerAlt className="ftr-icon" /> 1234 Prather
						Road, Louisville KY 47172
					</GenericPara>
				</div>
			</Ftr>
			<Copyright>
				<div>
					<span>&copy; {new Date().getFullYear()} , Skynet </span>
					<span>
						&middot; Built by
						{` `}RadiusMedia
					</span>
				</div>
			</Copyright>
		</>
	)
}
export default Footer