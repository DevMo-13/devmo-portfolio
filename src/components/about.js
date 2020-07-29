import React from 'react';
import styles from './css/about.module.css'

// Renders the About section of the page.
export default function About() {
	return (
		<section className='about section' className={`${styles.sectionPadding} ${styles.backgroundColor}`}>
			<div>
				<img className={styles.img} alt='headshot' src='profile-pic3.jpg'/>
			</div>
			<div>
				<h2 className={styles.h2}>Hi there! I'm Monique.</h2>
				<p className={`${styles.pPadding} ${styles.p}`}>I am a full stack web developer with 7+ years of experience working in higher education. I am eager to bring my strong organization and communication skills, the ability to effectively problem solve and troubleshoot issues, and a demonstrated drive to succeed into a new career in tech.
				<br/> <br/>
				I am a recent Treehouse Full Stack JavaScript techdegree grad, and I am looking forward to a lifetime of continued learning. Take a look at the projects below to see what I built throughout my techdegree journey. As a code newbie, I am eager to learn and improve, so if you have any feedback you could provide or know of any job opportunities, I would love to get in touch!</p>
			</div>
		</section>
	)
}
