
import React from 'react';
import styles from '../css/footer.module.css';

// Renders the Footer of the page.
export default function Footer() {	
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<a className='githubLink' href='https://github.com/DevMo-13' target='_blank' rel='noreferrer' aria-label='GitHub'>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'>
						<path d='M256,0C115.3,0,0,116.3,0,257c0,139.9,114.3,255,256,255c141.6,0,256-114.9,256-255C512,116.3,396.7,0,256,0z
						M301,477.5c-14.4,3-29.7,4.5-45,4.5s-30.6-1.5-45-4.5v-70.2c0-16.8,4.5-22.8,10.5-30.9c3.1-3.5,4.9-6.6,18.6-27.3l-23.1-3.6
						c-59.4-8.7-82.8-39.6-92.1-63.6c-12-32.1-5.7-72.3,15.9-97.8c3.3-3.9,6-10.5,3.6-17.4c-4.5-13.8-3.9-35.7-0.9-44.1
						c15.9,2.3,32.3,13.7,45.9,21.9c6.3,3.7,9.6,2.7,12.6,3c11-2.3,28.1-7.8,54.3-7.8c16.2,0,33.3,2.4,50.1,7.2c3-0.1,7.8,2.5,16.2-2.4
						c14.3-8.7,30.1-19.7,45.9-21.9c3,8.4,3.6,30.3-0.9,44.1c-2.4,6.9,0.3,13.5,3.6,17.4c21.6,25.5,27.9,65.7,15.9,97.8
						c-9.3,24-32.7,54.9-92.1,63.6l-23.1,3.6c14.2,21.4,15.7,23.9,18.6,27.3c6,8.1,10.5,14.1,10.5,30.9V477.5z M331,468.8v-61.5
						c0-17.1-3.6-28.5-8.4-36.9c45.6-12.3,78-39.3,92.4-78c15.3-40.8,8.4-89.4-17.1-123c4.5-20.1,4.5-52.2-6.3-67.2
						c-4.8-6.6-11.4-10.2-19.8-10.2c-0.3,0-0.3,0-0.3,0c-23.3,1.3-41.6,13-61.2,24.9c-18-4.8-36.3-7.2-54.6-7.2
						c-18.6,0-37.2,2.7-53.7,7.2c-20.7-12.5-38.8-23.7-62.7-24.9c-7.5,0-14.1,3.6-18.9,10.2c-10.8,15-10.8,47.1-6.3,67.2
						C88.6,203,81.7,251.9,97,292.4c14.4,38.7,46.8,65.7,92.4,78c-3.7,6.5-6.7,14.9-7.8,26.3c-9.2,3.2-17.2,4.2-24.6,2
						c-7.8-2.3-13.9-7.5-19.2-16.5c-11.9-20-32.2-36.4-55.3-34.2l2.6,29.9c10.7-1,21.3,10.3,26.9,19.7c9.1,15.4,21.4,25.4,36.5,29.9
						c11.2,3.3,21.5,3.2,32.6,0.9v40.4C93.7,438.2,30,354.8,30,257C30,132.8,131.8,30,256,30s226,102.8,226,227
						C482,354.8,418.3,438.2,331,468.8z'/>
					</svg>
				</a>
				<a className='linkedinLink' href='https://www.linkedin.com/in/moniquecinatl/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'>
						<path d='M396.6,512c2.2,0,101.6,0,99.4,0c8.8,0,16-7.2,16-16c-7.5-167.6,39.3-344.5-135.2-344.5
							c-33.6,0-60.3,11.5-79.6,26.6c0-31.2-33.7-13.9-111.4-18.6c-8.8,0-16,7.2-16,16c6.4,302.2-14.4,336.4,16,336.4h99.4
							c28.9,0,10.5-40.7,16-174.7c0-55.3,16-66.2,43.6-66.2c30.6,0,35.7,21.2,35.7,68.9C386.1,471.6,367.8,512,396.6,512z M344.9,239.1
							c-95.8,0-75.6,105.3-75.6,240.9h-67.4V191.5h63.4v27.7c0,15.4,23.4,22.9,31.6,7.5c10.5-19.9,37.8-43.2,80-43.2
							c75.2,0,103.2,37,103.2,136.4V480h-67.4C412.6,327.6,428.7,239.1,344.9,239.1L344.9,239.1z'/>
						<path d='M23.9,159.6c-30.3,0-9.6,33.8-16,336.4c0,8.8,7.2,16,16,16h99.5c30.3,0,9.6-33.8,16-336.4
							C139.5,147.9,99.3,164.2,23.9,159.6z M107.5,480H39.9V191.6h67.5V480z'/>
						<path d='M73.6,0c-97.6,0-97,147.8,0,147.8C170.6,147.8,171.4,0,73.6,0z M73.6,115.8c-54.8,0-55.3-83.8,0-83.8
							C129,32,128.3,115.8,73.6,115.8z'/>
					</svg>
				</a>
				<a className='treehouseLink' href='https://teamtreehouse.com/moniquecinatl' target='_blank' rel='noreferrer' aria-label='Treehouse'>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 452 492.4'>
							<path d='M386.2,105.9c-14.7-8.3-38.2,5.1-52.4,29.8L308,180.6c-9.4,18.7-8.1,40.9,3.8,58l0.8,1.1
								c12,17.2,28,33,33.3,38.7c3.1,3.3,5.5,7.4,6.8,12.1c4.4,15.6-4.7,31.8-20.3,36.1c-15.6,4.4-31.8-4.7-36.1-20.3
								c-1.1-3.9-1.3-7.9-0.8-11.6c0.8-6.4-1.2-16.9-10.5-27.2c-9.2-10.3-28.1,9.2-34.2,29.1l-0.3,0.9c-6.1,20-10,37.5-8.8,39.1
								c0.7,1,1.3,2.1,1.9,3.1c8.6,16.1,2.4,36.1-13.7,44.7c-16.1,8.6-36.1,2.4-44.7-13.7c-8.6-16.1-2.4-36.1,13.7-44.7
								c0.7-0.4,1.5-0.7,2.2-1.1c1.2-0.5,4.7-8.9,7.7-18.9c3-9.9,4.3-13.4,5.5-18c1.6-6.1,3.8-18.8,2.7-25.1c-1.3-7-8.5-7.5-15.9-2.1
								c-4.5,3.2-12,9.6-15.6,12.2c-6.8,4.9-12.6,14.4-15.6,20.2c-1.8,3.4-4.3,6.6-7.5,9.1c-12.5,10.1-30.8,8.2-40.9-4.3
								c-10.1-12.5-8.2-30.8,4.3-40.9c3.7-3,7.8-4.9,12.1-5.8c7.3-1.6,32.3-16.8,47.3-27.6c2.7-1.9,7.2-5.1,8.7-7.1
								c4.5-5.8-0.3-10.3-4.7-9.8c-12.8,1.4-26,3.2-28.4,6.4c-1.5,1.9-3.2,3.6-5.3,5c-11.7,8.4-27.9,5.8-36.3-5.9
								c-8.4-11.7-5.8-27.9,5.9-36.3c4.8-3.5,10.4-5,15.9-4.9c9.4,0.3,34,5.2,54.5,1.6l5.3-0.9c20.6-3.6,45.2-21.6,55.1-40
								c0,0,9.6-16.9,21.5-37.7c11.9-20.8,11-43.7-2-51L251.9,30c-11.8-6.7-31.2-6.7-43,0l-161.4,91C35.7,127.6,26,144.2,26,157.8v177.8
								c0,13.6,9.7,30.2,21.5,36.8l161.4,91c11.8,6.7,31.2,6.7,43,0l160.9-90.9c11.8-6.7,21.5-23.3,21.5-36.9V157.8
								c0-13.6-9.7-30.2-21.5-36.9C412.8,120.9,400.9,114.2,386.2,105.9z'/>
					</svg>
				</a>
				<a className='twitterLink' href='https://twitter.com/moniquecinatl' target='_blank' rel='noreferrer' aria-label='Twitter'>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512' >
						<path d='M512,103c-32.2,1.5-31.5,1.4-35.1,1.7l19.1-54.5c0,0-59.5,21.9-74.6,25.8c-39.6-35.6-98.6-37.2-140.7-11.3
							c-34.5,21.2-53,57.6-46.8,100.2c-67.1-9.3-123.7-41.1-168.4-94.8l-14.1-17L40.7,72.5C27.4,97,23,125,28.3,151.3
							c2.2,10.8,5.9,21.1,11,30.8l-12.1-4.7l-1.4,20.2c-1.5,20.6,5.4,44.6,18.3,64.2c3.6,5.5,8.3,11.6,14.3,17.6l-6.3-1l7.6,23.2
							c10,30.5,30.9,54.1,58,67.2c-27,11.5-48.9,18.8-84.8,30.6L0,410.3l30.3,16.6c11.6,6.3,52.4,27.4,92.8,33.8
							C212.9,474.7,314,463.3,382,402c57.3-51.6,76.1-125,72.2-201.4c-0.6-11.6,2.6-22.6,8.9-31.1C475.9,152.5,511.9,103.1,512,103z
							M439.2,151.5c-10.5,14.1-15.8,32-14.9,50.6c3.9,77.1-17,136.8-62.3,177.6c-52.9,47.7-138.3,66.4-234.2,51.3
							c-17.4-2.7-35.3-8.8-50.2-14.9c30.1-10.4,53.3-19.6,90.9-37.4l52.4-24.8l-57.9-3.7c-27.7-1.8-50.8-15.2-65-37
							c7.5-0.4,14.8-1.7,22-3.7l55.2-15.4l-55.6-13.6c-27-6.6-42.4-22.8-50.6-35.2c-5.4-8.2-8.9-16.5-11-24.2c5.6,1.5,12.1,2.6,22.6,3.6
							l51.5,5.1l-40.8-31.8c-29.4-22.9-41.2-57.4-32.5-90.5c91.8,95.2,199.5,88,210.3,90.5c-2.4-23.2-2.4-23.2-3.1-25.4
							c-13.9-49.1,16.5-74,30.3-82.5C325,72.6,370.5,69.9,402,99c6.8,6.3,16,8.7,24.6,6.6c7.7-1.9,14.1-4,20.3-6.2L434,136.3l16.5,0
							C447.4,140.5,443.7,145.5,439.2,151.5z'/>
					</svg>	
				</a>
				<a className='emailLink' href='mailto:moniquecinatl@gmail.com' target='_blank' rel='noreferrer' aria-label='Email'>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'>
						<path d='M467,61H45C20.2,61,0,81.2,0,106v300c0,24.7,20.1,45,45,45h422c24.7,0,45-20.1,45-45V106C512,81.3,491.9,61,467,61z
							M460.8,91L257,294.8L51.4,91H460.8z M30,399.8V112.1l144.5,143.2L30,399.8z M51.2,421l144.6-144.6l50.7,50.2
							c5.9,5.8,15.3,5.8,21.2,0l49.4-49.4L460.8,421H51.2z M482,399.8L338.2,256L482,112.2V399.8z'/>
					</svg>
				</a>
			</div>
			<div className={styles.copyright}>			
				<p className={styles.p}>• HANDCRAFTED BY MONIQUE CINATL &copy; 2020 •</p>
			</div>
		</footer>
	);
}
