import React from 'react';
import Footer from '../components/footer';
import styles from '../css/notfound.module.css'

// Renders the 404 / NotFound page.
export default function NotFound() {
	return (
		<div>
			<div className={styles.notFoundDiv} align='center'>
				<div className={styles.svgDiv}>
					<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 480 480'>
						<path fill='#225588' d='M456,0H24C10.7,0,0,10.7,0,24v336c0,13.3,10.7,24,24,24h173.8l-12,48H56c-13.3,0-24,10.7-24,24s10.7,24,24,24h368
							c13.3,0,24-10.7,24-24s-10.7-24-24-24H294.2l-12-48H456c13.3,0,24-10.7,24-24V24C480,10.7,469.3,0,456,0z M16,80h448v224H16V80z
							M464,24v40H348.9l-24-48H456C460.4,16,464,19.6,464,24z M307.1,16l24,48h-62.1l-24-48H307.1z M16,24c0-4.4,3.6-8,8-8h203.1l24,48
							H16V24z M432,456c0,4.4-3.6,8-8,8H56c-4.4,0-8-3.6-8-8s3.6-8,8-8h368C428.4,448,432,451.6,432,456z M277.8,432h-75.5l12-48h51.5
							L277.8,432z M464,360c0,4.4-3.6,8-8,8H24c-4.4,0-8-3.6-8-8v-40h448V360z'/>
						<path fill='#225588' d='M88,200h16v-48H88v16H72v-32H56v48h32V200z'/>
						<path fill='#225588' d='M216,184v16h16v-48h-16v16h-16v-32h-16v48H216z'/>
						<path fill='#225588' d='M128,200h32c4.4,0,8-3.6,8-8v-48c0-4.4-3.6-8-8-8h-32c-4.4,0-8,3.6-8,8v48C120,196.4,123.6,200,128,200z M136,152h16v32h-16
							V152z'/>
						<path fill='#225588' d='M232,216H56c-4.4,0-8,3.6-8,8v32c0,4.4,3.6,8,8,8h176c4.4,0,8-3.6,8-8v-32C240,219.6,236.4,216,232,216z M224,248H64v-16
							h160V248z'/>
						<path fill='#225588' d='M424,216H280c-4.4,0-8,3.6-8,8s3.6,8,8,8h144c4.4,0,8-3.6,8-8S428.4,216,424,216z'/>
						<path fill='#225588' d='M312,248h-32c-4.4,0-8,3.6-8,8s3.6,8,8,8h32c4.4,0,8-3.6,8-8S316.4,248,312,248z'/>
						<path fill='#225588' d='M424,248h-80c-4.4,0-8,3.6-8,8s3.6,8,8,8h80c4.4,0,8-3.6,8-8S428.4,248,424,248z'/>
						<path fill='#225588' d='M104,32H40c-4.4,0-8,3.6-8,8s3.6,8,8,8h64c4.4,0,8-3.6,8-8S108.4,32,104,32z'/>
						<path fill='#225588' d='M144,32h-8c-4.4,0-8,3.6-8,8s3.6,8,8,8h8c4.4,0,8-3.6,8-8S148.4,32,144,32z'/>
						<path fill='#225588' d='M184,32h-8c-4.4,0-8,3.6-8,8s3.6,8,8,8h8c4.4,0,8-3.6,8-8S188.4,32,184,32z'/>
						<path fill='#225588' d='M408,352h16c4.4,0,8-3.6,8-8s-3.6-8-8-8h-16c-4.4,0-8,3.6-8,8S403.6,352,408,352z'/>
					</svg>
				</div>
				<div>
					<h1 className={styles.h1}>Sorry, the page you're looking for does not exist!</h1>
					<a className={styles.home} href='/'>Home →</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}
