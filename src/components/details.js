import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import styles from '../css/details.module.css';

// Renders each project's details on its unique project-details page.
export default function Details({ pageContext: { project} }) {
	// Maps through technologies and renders each as a list item.
	const { technologies } = project;
	const tech = technologies.map(function (technology, index) {
		return <li key={index}>{technology}</li>;
	});

	// Turns project's id from a string into a number.
	const projectId = parseInt(project.id);
	
	return (
		<div className='content'>
			<main>
				<Link to='/'>Home</Link>
				<Link to={`/project-details/${projectId - 1}`}>← Previous Project</Link>
				<Link to={`/project-details/${projectId + 1}`}>Next Project →</Link>
				<h1 className={styles.h1}>{project.name}</h1>

				<p className={styles.desc}>{project.description}</p>

				<p className={styles.github}>
					<a href={project.githubLink}>Source Code</a>
				</p>

				<ul>
					{tech}
				</ul>

				<img src={project.mainImage.path} alt={project.mainImage.alt}/>
				<img src={project.otherImage1.path} alt={project.otherImage1.alt}/>
				<img src={project.otherImage2.path} alt={project.otherImage2.alt}/>
				<img src={project.otherImage3.path} alt={project.otherImage3.alt}/>
			</main>
			<Footer />
		</div>
	)
}

/*
TO DO
-fix prev and next buttons for when they reach the first/last projects
- continue styling
*/