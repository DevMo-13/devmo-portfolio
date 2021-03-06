
import React from 'react';
import { Link } from 'gatsby';
import styles from '../css/projects.module.css';

// Renders each project div for the Projects section of the index page.
export default function Project({ id, name, mainImgData }) {
	return (
		<div className={styles.projDiv} id={id}>
			<li className={styles.li}>
				<h3 className={styles.h3}>{name}</h3>
				<div className={styles.imgDiv}>
					<img className={styles.img} src={mainImgData.path} alt={mainImgData.alt}/>
					<button className={styles.button}>
						<Link className={styles.link} to={`/project-details/${id}`}>View Details →</Link>
					</button>
				</div>
			</li>
		</div>
	);
}
