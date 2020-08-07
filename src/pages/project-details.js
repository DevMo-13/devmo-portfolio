import React from 'react';
// import { Router, Route } from "@reach/router"
import Details from '../components/details';
import Footer from '../components/footer';

export default function ProjectDetails() {
	return (
		<main>
			{/* <Router>
				<Route path='/project-details/:id' component={Details} />
			</Router> */}
			<Details />
			<Footer />
		</main>
	)
}
