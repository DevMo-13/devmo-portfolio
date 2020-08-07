import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project'
import styles from '../css/projects.module.css';

// Renders the Projects section of the index page.
export default function Projects() {
	
	// Queries all the data for all projects from the json file. 
	const data = useStaticQuery(graphql`
    	query data {
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

	const projectsArray = data.allDataJson.edges[0].node.projects;

	// Maps through each project's queried data to render the Project component
	// and pass the data through as props.
	const projects = projectsArray.map(project => {
		return (
			<Project
				key={project.id}
				id={project.id}
				name={project.projName}
				mainImgData={project.mainImage}
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
