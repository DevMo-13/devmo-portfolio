
import React from 'react';
import Hello from '../components/hello';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function Home() {
	return (
		<main>
			<Hello />
			<About />
			<Projects />
			<Footer />
		</main>
	)
}
