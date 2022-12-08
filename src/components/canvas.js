import React, { useEffect, useRef } from "react"

import styled from "styled-components"

const AnimatedCanvas = styled.canvas`
	display: inline-block;
	position: relative;
	// left: 0;
	// top: 0;
	width: 100%;
	// height: 100%;
	// background-size: cover;
	// background-repeat: no-repeat;
`

const Canvas = props => {
	const canvasRef = useRef(null)

	useEffect(() => {
		const N = 256
		const canvas = canvasRef.current
		const ctx = canvas.getContext("2d")
		// const offscreenCanvas = document.createElement('canvas');

		// const octx = offscreenCanvas.getContext('2d');
		var background = new Image()
		background.src = "../images/canvas-bg.jpg"

		// Make sure the image is loaded first otherwise nothing will draw.
		background.onload = function () {
			ctx.drawImage(background, 0, 0, canvas.height, canvas.width)
		}
		const resize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			// offscreenCanvas.width = canvas.width;
			// offscreenCanvas.height = canvas.height;
		}
		window.addEventListener("resize", resize)
		resize()
		const noise = (t, y) =>
			Math.sin(t * 4.9 + y * 3.1 + 1) *
				Math.sin(t * 9.1 + y * -2.7 + 2) *
				(Math.sin(t * 11.3 + Math.sin(y * 3) + 3) +
					Math.random() * 0.2) *
				0.5 -
			0.5

		const offset = 8 / 10

		let t = 0

		const line = offset => {
			// Draw random line
			const w = canvas.width
			const h = canvas.height

			ctx.strokeStyle = "orange"
			ctx.strokeWidth = 8
			ctx.lineWidth = 4

			ctx.moveTo(0, h * offset)
			ctx.beginPath()
			for (let i = 0; i <= 2 * N; i++) {
				const l = Math.pow(Math.sin((Math.PI * i) / N) * 1.2, 2)
				const x = noise(i / N, t) * 0.1 * l * h
				ctx.lineTo((w / N) * i, x + h * offset)
			}
			ctx.moveTo(w, h * offset)
			ctx.closePath()

			ctx.stroke()

			t++
		}
		function drawLines() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.filter = "contrast(1.5) opacity(75%)"
			// ctx.drawImage(background,0,0, canvas.clientWidth, canvas.clientHeight);
			// ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

			// ctx.filter = 'sepia(0)';
			line(6.5 / 10)
			// line(9/10);
		}
		setInterval(drawLines, 300)
	}, [])

	return <AnimatedCanvas ref={canvasRef} />
}

export default Canvas
