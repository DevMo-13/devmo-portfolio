
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../css/about.module.css';

// Renders the About section of the index page.
export default function About() {
	// Queries a gatsby-image for the profile picture.
	const query = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "profile-pic.webp" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<section className={styles.aboutSection}>
			<div>
				<Img fluid={query.file.childImageSharp.fluid} loading='eager' className={styles.img} alt='profile image' />
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
	);
}
