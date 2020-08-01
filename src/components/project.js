import React from 'react';
import styles from '../css/projects.module.css';

export default function Project({ id, name }) {

	return (
		<div className={styles.projDiv}>
			<li>
				<h3 className={styles.h3}>{name}</h3>
				<div className={styles.imgDiv}>
					<img className={styles.img} src='pattern.jpeg'/>
				</div>
			</li>
		</div>
	)
}
