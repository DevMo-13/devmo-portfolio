import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import styles from '../css/details.module.css';

// Renders each project's details on a unique project-details page.
export default function Details({ pageContext: { project} }) {
	let prevProject;
	let nextProject;
	const projectId = parseInt(project.id);

	// Renders different links depending on which project page the user is on. 
	// If user is on the first project page, selecting to see the previous project will
	// take the user to the last project. If the user is on any other project page,
	// the user will be taken to the previous project's page.
	if (projectId === 1) {
		prevProject = <Link className={styles.navLinks} to={`/project-details/10`}>← Previous Project</Link>
	} else {
		prevProject = <Link className={styles.navLinks} to={`/project-details/${projectId - 1}`}>← Previous Project</Link>
	}

	// If user is on the last project page, selecting to see the next project will
	// take the user to the first project. If the user is on any other project page,
	// the user will be taken to the next project's page.
	if (projectId === 10) {
		nextProject = <Link className={styles.navLinks} to={`/project-details/1`}>Next Project →</Link>
	} else {
		nextProject = <Link className={styles.navLinks} to={`/project-details/${projectId + 1}`}>Next Project →</Link>
	}

	// Maps through technologies and renders each as a list item.
	const { technologies } = project;
	const tech = technologies.map(function (technology, index) {
		return <li key={index}>{technology}</li>;
	});
	
	return (
		<div className='content'>
			<main>
				<nav className={styles.nav}>
					{prevProject}
					<Link className={styles.navLinks} to='/'>Home</Link>
					{nextProject}
				</nav>
				<h1 className={styles.h1}>{project.name}</h1>
				<div className={styles.infoDiv}>
					<p className={styles.desc}>{project.description}</p>
					<br/>
					<button className={styles.button}>
						<a className={styles.githubLink} href={project.githubLink} target='_blank' rel='noreferrer'>Github Repo →</a>
					</button>
					<br/>
					<div className={styles.techDiv}>
						<p className={styles.tech}>{`<Technologies />`}</p>
						<ul className={styles.techLi}>
							{tech}
						</ul>
					</div>
				</div>
				<div className={styles.imagesDiv}>
					<img className={styles.img} src={project.mainImage.path} alt={project.mainImage.alt}/>
					<img className={styles.img} src={project.otherImage1.path} alt={project.otherImage1.alt}/>
					<img className={styles.img} src={project.otherImage2.path} alt={project.otherImage2.alt}/>
					<img className={styles.img} src={project.otherImage3.path} alt={project.otherImage3.alt}/>
				</div>
			</main>
			<Footer />
		</div>
	)
}
