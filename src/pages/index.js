import React from 'react';
import Nav from '../components/nav';
import Hello from '../components/hello';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function Home() {
	return (
		<div>
			<Nav />
			<Hello />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</div>
	)
}
