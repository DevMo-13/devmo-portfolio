
import React from 'react';
import Hello from '../components/hello';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function Home() {
	return (
		<div className='content'>
			<main>
				<Hello />
				<About />
				<Projects />
			</main>
			<Footer />
		</div>
	)
}
