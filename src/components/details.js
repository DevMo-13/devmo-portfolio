import React from 'react';
import Footer from '../components/footer';
// import styles from '../css/details.module.css';

// Renders each project's details on its unique project-details page.
export default function Details({ pageContext: { project} }) {
	return (
		<main>
			<h2>{project.projName}</h2>
			<Footer />
		</main>
	)
}