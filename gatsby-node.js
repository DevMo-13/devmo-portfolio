
// Creates pages for each project based on the projects data in the json file.
const json = require('./src/data/projects.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions;

	json.projects.forEach(project => {
		createPage({
			path: `/project-details/${project.id}`,
			component: require.resolve(`./src/components/details.js`),
			context: { project },
		})
	});
}
