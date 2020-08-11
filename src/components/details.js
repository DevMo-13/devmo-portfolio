
import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo'
import Footer from '../components/footer';
import styles from '../css/details.module.css';

// Renders each project's details on a unique project-details page.
export default function Details({ pageContext: { project} }) {
	const projectId = parseInt(project.id);
	let prevProject;
	let nextProject;

	// Renders different links depending on which project page the user is on. 
	// If user is on the first project page, selecting to see the previous project will
	// take the user to the last project. If the user is on any other project page,
	// the user will be taken to the previous project's page.
	if (projectId === 1) {
		prevProject = <Link className={styles.navLinks} to={`/project-details/10`}>← Previous Project</Link>
	} else {
		prevProject = <Link className={styles.navLinks} to={`/project-details/${projectId - 1}`}>← Previous Project</Link>
	};

	// If user is on the last project page, selecting to see the next project will
	// take the user to the first project. If the user is on any other project page,
	// the user will be taken to the next project's page.
	if (projectId === 10) {
		nextProject = <Link className={styles.navLinks} to={`/project-details/1`}>Next Project →</Link>
	} else {
		nextProject = <Link className={styles.navLinks} to={`/project-details/${projectId + 1}`}>Next Project →</Link>
	};

	// Maps through technologies and renders each as a button.
	const { technologies } = project;
	const technology = technologies.map(function (technology, index) {
		return <button className={styles.techButton} key={index}>{`#${technology}`}</button>;
	});

	return (
		<>
			<SEO title='Projects' />
			<div className='content'>
				<main>
					<nav className={styles.nav}>
						{prevProject}
						<Link className={styles.navLinks} to='/'>Home</Link>
						{nextProject}
					</nav>
					<div>
						<h1 className={styles.h1}>{project.name}</h1>
						<p className={styles.desc}>{project.description}</p>
					</div>
					<div className={styles.techDiv}>
						{technology}
					</div>
					<div className={styles.githubDiv}>
						<a href={project.githubLink} target='_blank' rel='noreferrer'>
							<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'>
								<path className={styles.st0} d='M512,257c0,120-84.1,220.5-196,247.5l-30.6-97.2h-58.8L197,504.5C85.1,477.5,0,377,0,257C0,116.3,115.3,0,256,0
									S512,116.3,512,257z'/>
								<path className={styles.st1} d='M512,257c0,120-84.1,220.5-196,247.5l-30.6-97.2H256V0C396.7,0,512,116.3,512,257z'/>
								<path className={styles.st2} d='M181.3,430.1c-6.1,0-12-0.9-17.8-2.6c-15.1-4.5-27.4-14.5-36.5-29.9c-4.2-7-8.5-11.9-13.6-15.3
									c-5-3.4-9-4.7-13.3-4.4L97.4,348c11.1-1,21.8,2.1,32.6,9.3c8.8,5.9,16.3,14.1,22.7,24.9c5.3,8.9,11.4,14.2,19.3,16.5
									c8.8,2.6,17.9,1.5,29.6-3.5l11.8,27.6C202.1,427.6,191.5,430.1,181.3,430.1z'/>
								<path className={styles.st2} d='M400.9,287.3c-10.5,27.9-36.9,63.3-103.8,73.2c8.7,12.9,19.2,19.8,18.9,46.8v97.2c-19.2,4.8-39.3,7.5-60,7.5
									s-39.8-2.7-59-7.5v-98.4c0-26.7,10.1-34.2,17.9-45.6c-66.9-9.9-93.3-45.3-103.8-73.2c-14.1-37.2-6.6-83.4,18-112.8
									c0.6-0.6,1.5-2.1,1.2-3c-11.4-34.2,2.4-62.7,3-65.7c12.9,3.9,15-3.9,56.7,21.6l7.2,4.2c3,1.8,2.1,0.6,5.1,0.6
									c17.4-4.8,35.7-7.5,53.7-7.5c18.3,0,36.3,2.7,54.6,7.5l2.1,0.3c0,0,0.6,0,2.1-0.9c51.9-31.5,50.1-21.3,64.2-25.8
									c0.3,3,14.1,31.8,2.7,65.7C380.2,176,426.7,218.6,400.9,287.3z'/>
								<path className={styles.st3} d='M400.9,287.3c-10.5,27.9-36.9,63.3-103.8,73.2c8.7,12.9,19.2,19.8,18.9,46.8v97.2c-19.2,4.8-39.3,7.5-60,7.5
									V124.7c18.3,0,36.3,2.7,54.6,7.5l2.1,0.3c0,0,0.6,0,2.1-0.9c51.9-31.5,50.1-21.3,64.2-25.8c0.3,3,14.1,31.8,2.7,65.7
									C380.2,176,426.7,218.6,400.9,287.3z'/>
							</svg>
						</a>
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
		</>
	);
}
