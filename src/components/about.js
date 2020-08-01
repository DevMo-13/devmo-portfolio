import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import styles from '../css/about.module.css'

// Renders the About section of the page.
export default function About(props) {
	const img = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "profile-pic3.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<section className={styles.aboutSection}>
			<div>
				<Img
					fluid={img.file.childImageSharp.fluid}
					alt="headshot"
					fadeIn={false}
					className={styles.img}
					loading="eager"
				/>
			</div>
			<div>
				<h2 className={styles.h2}>Hi there! I'm Monique.</h2>
				<p className={styles.p}>I am a full stack web developer with 7+ years 
				of experience working in higher education. I am eager to bring my strong organization and 
				communication skills, the ability to effectively problem solve and troubleshoot issues, and a 
				demonstrated drive to succeed into a new career in tech.<br/><br/>I am a recent Treehouse Full 
				Stack JavaScript techdegree grad, and I am looking forward to a lifetime of continued learning. 
				Take a look at the projects below to see what I built throughout my techdegree journey.</p>
			</div>
		</section>
	)
}
