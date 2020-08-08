import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import styles from '../css/details.module.css';

// Renders each project's details on its unique project-details page.
export default function Details({ pageContext: { project} }) {
	let prevProject;
	let nextProject;
	const projectId = parseInt(project.id);

	// Renders different links depending on which project page the user is on. 
	// If user is on the first project page, selecting to see the previous project will
	// take the user to the last project. If the user is on any other project page,
	// the user will be taken to the previous project's page.
	if (projectId === 1) {
		prevProject = <Link to={`/project-details/10`}>← Previous Project</Link>
	} else {
		prevProject = <Link to={`/project-details/${projectId - 1}`}>← Previous Project</Link>
	}

	// If user is on the last project page, selecting to see the next project will
	// take the user to the first project. If the user is on any other project page,
	// the user will be taken to the next project's page.
	if (projectId === 10) {
		nextProject = <Link to={`/project-details/1`}>Next Project →</Link>
	} else {
		nextProject = <Link to={`/project-details/${projectId + 1}`}>Next Project →</Link>
	}

	// Maps through technologies and renders each as a list item.
	const { technologies } = project;
	const tech = technologies.map(function (technology, index) {
		return <li key={index}>{technology}</li>;
	});
	
	return (
		<div className='content'>
			<main>
				<Link to='/'>Home</Link>
				{prevProject}
				{nextProject}
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
