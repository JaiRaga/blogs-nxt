import Image from 'next/image'

import classes from './hero.module.css'

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/raga.jpeg'
					alt='An Image Showing Raga'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Raga</h1>
			<p>I Develope Web Apps that are Responsive.</p>
		</section>
	)
}

export default Hero
