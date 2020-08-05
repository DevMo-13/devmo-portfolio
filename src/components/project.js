import React from 'react';
import styles from '../css/projects.module.css';

// Renders each project div.
export default function Project({ id, name, imgData }) {
	return (
		<div className={styles.projDiv} id={id}>
			<li className={styles.li}>
				<h3 className={styles.h3}>{name}</h3>
				<div className={styles.imgDiv}>
					<img className={styles.img} src={imgData.path} alt={imgData.alt}/>
				</div>
			</li>
		</div>
	)
}
