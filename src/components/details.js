import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
// import styles from '../css/details.module.css';

// Renders each project's details on its unique project-details page.
export default function Details({ pageContext: { project} }) {
	// Maps through technologies and renders each as a list item.
	const { technologies } = project;
	const tech = technologies.map(function (technology, index) {
		return <li key={index}>{technology}</li>;
	});
	
	return (
		<>
			<main>
				<h1>{project.name}</h1>

				<p>{project.description}</p>

				<p>{project.githubLink}</p>

				<ul>
					{tech}
				</ul>

				<img src={project.mainImage.path} alt={project.mainImage.alt}/>
				<img src={project.otherImage1.path} alt={project.otherImage1.alt}/>
				<img src={project.otherImage2.path} alt={project.otherImage2.alt}/>
				<img src={project.otherImage3.path} alt={project.otherImage3.alt}/>

				<Link to='/'>Home →</Link>
			</main>
			<Footer />
		</>
	)
}