import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project'
import styles from '../css/projects.module.css';

// Renders the Projects section of the page.
export default function Projects() {
	const projectsData = useStaticQuery(graphql`
    	query ProjectsData {
            allDataJson {
                edges {
                    node {
                        projects {
							id
							projName
							mainImage {
								path
								alt
							}
						}
					}
				}
			}
		}
	`);

	const projectsArray = projectsData.allDataJson.edges[0].node.projects;

	const projects = projectsArray.map(project => {
		return (
			<Project
				key={project.id}
				id={project.id}
				name={project.projName}
				imgData={project.mainImage}
			/>
		)
	});

	return (
		<section className={styles.projectsSection}>
			<ul className={styles.ul}>
				{projects}
			</ul>
		</section>
	)
}
