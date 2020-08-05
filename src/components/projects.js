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
							description
							githubLink
							liveLink
							technologies
							mainImage {
								path
								alt
							}
							otherImage1 {
								path
								alt
							}
							otherImage2 {
								path
								alt
							}
							otherImage3 {
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
				desc={project.description}
				github={project.githubLink}
				live={project.liveLink}
				tech={project.technologies}
				mainImgData={project.mainImage}
				otherImgData1={project.otherImage1}
				otherImgData2={project.otherImage2}
				otherImgData3={project.otherImage3}
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
