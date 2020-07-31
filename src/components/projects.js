import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project'
import styles from './css/projects.module.css';

export default function Projects() {
	const projectsData = useStaticQuery(graphql`
    	query ProjectsData {
            allDataJson {
                edges {
                    node {
                        projects {
							id
							projName
						}
					}
				}
			}
		}
	`);

	const projectsArray = projectsData.allDataJson.edges[0].node.projects;
	console.log(projectsArray);

	const projects = projectsArray.map(project => {
		return (
			<Project
				key={project.id}
				id={project.id}
				name={project.projName}
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
