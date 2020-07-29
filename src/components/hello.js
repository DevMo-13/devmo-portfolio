import React from 'react';
import styles from './css/hello.module.css'

export default function Hello() {
	return (
		<section className={styles.sectionPadding}>
			<h1 className={styles.h1}>Monique Rico Cinatl</h1>
			<h2 className={styles.h2}>Developer. Creator. Collaborator.</h2>
		</section>
	)
}
