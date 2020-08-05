import React from 'react';
import Details from './details';
import styles from '../css/projects.module.css';

// Renders each project div.
export default function Project({ id, name, desc, github, live, tech, mainImgData, otherImgData1, otherImgData2, otherImgData3 }) {

	return (
		<div className={styles.projDiv} id={id}>
			<li className={styles.li}>
				<h3 className={styles.h3}>{name}</h3>
				<div className={styles.imgDiv}>
					<img className={styles.img} src={mainImgData.path} alt={mainImgData.alt}/>
					<button className={styles.button}>
						<a className={styles.link} href={`/project-details/${id}`}>Project Details →</a>
					</button>
				</div>
			</li>
		</div>
	)
}
