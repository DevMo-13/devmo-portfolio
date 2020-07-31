import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hello from '../components/hello';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function Home() {
	return (
		<BrowserRouter>
			<div>
				<Hello />
				<About />
			</div>
			<Footer />
		</BrowserRouter>
	)
}
