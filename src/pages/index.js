
import React from 'react';
import {Helmet} from 'react-helmet';
import Hello from '../components/hello';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function Home() {
	return (
		<>
			<Helmet>
					<meta charSet='utf-8' />
					<title>Monique's Portfolio</title>
					<link rel='icon' href='favicon.ico' />
					<link rel='canonical' href='http://moniquecinatl.com' />
			</Helmet>
			<div className='content'>
				<main>
					<Hello />
					<About />
					<Projects />
				</main>
				<Footer />
			</div>
		</>
	)
}
