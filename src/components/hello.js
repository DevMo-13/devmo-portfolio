import React from 'react';
import styles from './css/hello.module.css'

// Renders the Hello section of the page.
export default function Hello() {
	return (
		<section className={styles.helloSection}>
			<h1 className={styles.h1}>Monique Rico Cinatl</h1>
			<h2 className={styles.h2}>Developer • Creator • Collaborator</h2>
		</section>
	)
}
